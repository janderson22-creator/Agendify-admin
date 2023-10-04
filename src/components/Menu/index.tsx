import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { ProductsIcon } from "../../assets/icons/productsIcon";
import { SchedulesIcon } from "../../assets/icons/schedulesIcon";
import { ServicesIcon } from "../../assets/icons/services";
import { useCommerce } from "../../context/commerce";
import * as S from "./styles";
import { joinSentence } from "../../utils/join-sentence";
import classNames from "../../utils/className";
import { CommerceIcon } from "../../assets/icons/commerce";
import Tooltip from "../Base/tooltip";

const Menu: React.FC = () => {
  const { currentCommerce, setCurrentCommerce } = useCommerce();
  const location = useLocation();
  const [hoverTooltips, setHoverTooltips] = useState<HoverTooltipsState>({});
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  const items = useMemo(
    () => [
      {
        name: "Estabelecimento",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}
        }`,
        icon: <CommerceIcon />,
        checked: pathname.split("/").length === 2,
      },
      {
        name: "Agendamento",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/schedules`,
        icon: <SchedulesIcon />,
        checked: pathname.includes("schedules"),
      },
      {
        name: "Produtos",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/products`,
        icon: <ProductsIcon />,
        checked: pathname.includes("products"),
      },
      {
        name: "Serviços",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/services`,
        icon: <ServicesIcon />,
        checked: pathname.includes("services"),
      },
    ],
    [pathname, location.pathname, currentCommerce]
  );

  return (
    <S.Container>
      <div className="w-full flex items-center justify-around lg:justify-center lg:mr-auto">
        {items.map((item, index) => {
          const handleMouseEnter = () => {
            setHoverTooltips((prevState) => ({
              ...prevState,
              [index]: true,
            }));
          };

          const handleMouseLeave = () => {
            setHoverTooltips((prevState) => ({
              ...prevState,
              [index]: false,
            }));
          };

          const isHovered = hoverTooltips[index] || false;

          return (
            <Link to={item.link} key={index}>
              <S.ContainerLink
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classNames(
                  "flex items-center justify-center rounded-[10px] lg:min-h-[40px] lg:min-w-[50px] lg:mx-5 relative",
                  item.checked ? "" : ""
                )}
              >
                <S.Icon checked={item.checked}>{item.icon}</S.Icon>

                {isHovered && <Tooltip message={item.name} />}
              </S.ContainerLink>
            </Link>
          );
        })}
      </div>
    </S.Container>
  );
};

export default Menu;

interface HoverTooltipsState {
  [index: number]: boolean;
}
