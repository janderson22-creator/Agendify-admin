import { useEffect, useState } from "react";
import classNames from "../../../utils/className";
import { EmailIconLogin } from "../../../assets/icons/emailIconLogin";
import { PasswordIconLogin } from "../../../assets/icons/passwordIconLogin";
import { useCommerce } from "../../../context/commerce";

const Login: React.FC = () => {
  const { sigIn } = useCommerce();
  const [focus, setFocus] = useState<FocusType>("");
  const [form, setForm] = useState<FormType>({
    email: "",
    password: "",
  });

  return (
    <>
      <div className="fixed w-full h-full left-0 right-0 bottom-0 top-0 m-auto backdrop-blur-lg z-[1]" />
      <div className="fixed w-[500px] h-fit bg-[#2f3a59] m-auto top-0 bottom-0 right-0 left-0 z-[2] rounded-[10px] px-[50px] py-[50px]">
        <p className="text-[#F5F5FC] text-[18px] font-bold">Login</p>
        <p className="text-[#BDBDCC] text-sm ">Faça o seu login.</p>

        <div className="relative mt-6 w-full">
          <div className="relative top-1 w-full bg-[#0B0A25] py-1 rounded-t-[8px] pl-2.5">
            <p
              className={classNames(
                "text-[11px]",
                focus === "email" ? "text-[#F5F5FC]" : "text-[#646466]"
              )}
            >
              E-mail
            </p>
          </div>
          <div className="relative w-full">
            <div className="absolute left-2 bottom-0 top-1.5 h-full">
              <EmailIconLogin color={focus === "email"} />
            </div>
            <input
              type="text"
              className={classNames(
                "w-full bg-[#030314] border rounded-[6px] py-1 pl-10 text-[#F5F5FC]",
                focus === "email" ? "border-[#C2C0FF]" : " border-[#646466]"
              )}
              placeholder="Digite seu e-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocus("email")}
              onBlur={() => setFocus("")}
            />
          </div>
        </div>

        <div className="relative mt-5 w-full">
          <div className="relative top-1 w-full bg-[#0B0A25] py-1 rounded-t-[8px] pl-2.5">
            <p
              className={classNames(
                "text-[11px]",
                focus === "senha" ? "text-[#F5F5FC]" : "text-[#646466]"
              )}
            >
              Senha
            </p>
          </div>
          <div className="relative w-full">
            <div className="absolute left-2 bottom-0 top-1.5 h-full">
              <PasswordIconLogin color={focus === "senha"} />
            </div>
            <input
              type="text"
              className={classNames(
                "w-full bg-[#030314] border rounded-[6px] py-1 pl-10 text-[#F5F5FC]",
                focus === "senha" ? "border-[#C2C0FF]" : " border-[#646466]"
              )}
              placeholder="Digite sua senha"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              onFocus={() => setFocus("senha")}
              onBlur={() => setFocus("")}
            />
          </div>
        </div>

        <div
          onClick={() => sigIn(form.email, form.password)}
          className="flex items-center justify-center bg-[#F5F5FC] rounded-[4px] w-full py-2 cursor-pointer mt-20"
        >
          <p className="text-[#141616] text-[15px] font-bold">Entrar</p>
        </div>
      </div>
    </>
  );
};

export default Login;

type FocusType = "email" | "senha" | "";

type FormType = {
  email: string;
  password: string;
};
