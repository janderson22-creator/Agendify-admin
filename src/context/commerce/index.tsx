import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { doc, getDoc, collection, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConnection";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export type ContextValue = {
  currentCommerce: EstablishmentTypes;
  setCurrentCommerce: React.Dispatch<React.SetStateAction<EstablishmentTypes>>;
  formattedDate: CommerceSchedulesProps;
  setFormattedDate: React.Dispatch<
    React.SetStateAction<CommerceSchedulesProps>
  >;
  fetchEstablishmentsById: (id: string) => Promise<void>;
  loadingEstablishment: boolean;
  sigIn: (email: string, password: string) => Promise<void>;
  signOutCommerce: () => Promise<void>;
  addEmployee: (newEmployee: Employees) => Promise<void>;
};

export const CommerceContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const CommerceProvider: React.FC<ChildrenProps> = ({
  children,
  ...rest
}) => {
  const [currentCommerce, setCurrentCommerce] = useState<EstablishmentTypes>(
    {} as EstablishmentTypes
  );
  const [ownerId, setOwnerId] = useState("");
  const [establishments, setEstablishments] = useState<EstablishmentTypes[]>();
  const [loadingEstablishment, setLoadingEstablishment] = useState(false);
  const [formattedDate, setFormattedDate] = useState<CommerceSchedulesProps>({
    dayOnWeek: "",
    month: "",
    day: "",
    year: "",
    name_employee: "",
    name_user: "",
    description: "",
    phone_number: "",
    service: "SERVIÇO",
    time: "HORÁRIO",
  });

  const sigIn = useCallback(async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setOwnerId(response.user.uid);
    } catch (e) {
      console.log(e, "ERROR SIGN IN");
    }
  }, []);

  const fetchEstablishments = useCallback(async () => {
    const establishmentsRef = collection(db, "establishments");

    try {
      const querySnapshot = await getDocs(establishmentsRef);

      const establishmentsData = querySnapshot.docs.map((doc) => {
        const data = doc.data() as EstablishmentTypes;

        return {
          id: doc.id,
          name_establishment: data.name_establishment || "",
          avatar_url: data.avatar_url || "",
          cover_url: data.cover_url || "",
          type: data.type || "",
          follow_up: data.follow_up || "",
          employees: data.employees || [],
          services: data.services || [],
          about: data.about,
          products: data.products,
          owner_id: data.owner_id,
        };
      });

      setEstablishments(establishmentsData);
    } catch (e) {
      console.log(e, "ERROR FETCH ESTABLISHMENTS");
    }
  }, []);

  useEffect(() => {
    fetchEstablishments();
  }, []);

  const fetchEstablishmentsById = useCallback(async (id: string) => {
    setLoadingEstablishment(true);
    const establishmentsRef = doc(db, "establishments", id);

    try {
      const querySnapshot = await getDoc(establishmentsRef);
      const data = querySnapshot.data() as EstablishmentTypes;

      if (data) {
        setCurrentCommerce({
          id: id,
          name_establishment: data.name_establishment || "",
          avatar_url: data.avatar_url || "",
          cover_url: data.cover_url || "",
          type: data.type || "",
          follow_up: data.follow_up || "",
          employees: data.employees || [],
          services: data.services || [],
          about: data.about,
          products: data.products,
          owner_id: data.owner_id,
        });
      }
    } finally {
      setLoadingEstablishment(false);
    }
  }, []);

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const adminEstablishment = establishments?.filter(
            (f) => f.owner_id === user.uid
          );

          if (adminEstablishment) {
            fetchEstablishmentsById(adminEstablishment[0].id);
          }
        } else {
          console.log("DON'T HAVE USER");
        }
      });
    }

    checkLogin();
  }, [establishments]);

  useEffect(() => {
    if (!ownerId) return;

    const adminEstablishment = establishments?.filter(
      (f) => f.owner_id === ownerId
    );

    if (adminEstablishment) {
      fetchEstablishmentsById(adminEstablishment[0].id);
    }
  }, [ownerId]);

  const signOutCommerce = useCallback(async () => {
    try {
      const response = await signOut(auth);
      setCurrentCommerce({} as EstablishmentTypes);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }, [auth]);

  const addEmployee = useCallback(async (newEmployee: Employees) => {
    if (!currentCommerce || !currentCommerce.employees || !currentCommerce.id) return;

    const establishmentRef = doc(db, "establishments", currentCommerce.id);
    console.log(newEmployee);

    try {
      const establishmentDoc = currentCommerce;

      if (establishmentDoc) {
        establishmentDoc.employees.push(newEmployee);

        await setDoc(establishmentRef, establishmentDoc);
      }
    } catch (e) {
      console.log(e, "ERROR ADD EMPLOYEE");
    }
  }, [currentCommerce]);

  const value = useMemo(
    () => ({
      formattedDate,
      setFormattedDate,
      currentCommerce,
      setCurrentCommerce,
      fetchEstablishmentsById,
      loadingEstablishment,
      sigIn,
      signOutCommerce,
      addEmployee,
    }),
    [
      formattedDate,
      setFormattedDate,
      currentCommerce,
      setCurrentCommerce,
      fetchEstablishmentsById,
      loadingEstablishment,
      sigIn,
      signOutCommerce,
      addEmployee,
    ]
  );

  return (
    <CommerceContext.Provider value={value} {...rest}>
      {children}
    </CommerceContext.Provider>
  );
};

export const useCommerce = (): ContextValue => {
  const context = useContext(CommerceContext);

  if (context === undefined) {
    throw new Error("useCommerce must be used within an CommerceProvider");
  }

  return context;
};

//
// Utils
//

interface ChildrenProps {
  children: React.ReactNode;
}
interface CommerceSchedulesProps {
  dayOnWeek: string;
  month: string;
  day: string;
  year: string;
  name_employee: string;
  name_user: string;
  description: string;
  phone_number: string;
  service: string;
  time: string;
}

export interface EstablishmentTypes {
  id: string;
  owner_id: string;
  name_establishment: string;
  avatar_url: string;
  cover_url: string;
  type: string;
  follow_up: string;
  employees: Employees[];
  services: string[];
  about: {
    description: string;
    images: string[];
    location: string;
    phone_number: string;
  };
  products: {
    product_name: string;
    product_url: string;
    value: string;
  }[];
}

export interface ScheduleMarkedTypes {
  description: string;
  name_user: string;
  phone_number: string;
  service: string;
  start: {
    seconds: number;
    nanoseconds: number;
  };
  end: {
    seconds: number;
    nanoseconds: number;
  };
}

export interface Employees {
  id: string;
  avatar_url: string;
  function: string;
  name: string;
  schedules: EmployeeSchedules;
  schedules_marked: ScheduleMarkedTypes[];
}

export interface EmployeeSchedules {
  sunday: string[];
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
}
