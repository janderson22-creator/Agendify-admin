import React, { useEffect, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "../pages/Products";
import Schedules from "../pages/Schedules";
import Services from "../pages/Services";
import Establishment from "../pages/establishment";
import { useCommerce } from "../context/commerce";
import { joinSentence } from "../utils/join-sentence";

const RoutesMain: React.FC = () => {
  const { currentCommerce } = useCommerce();

  const nameEstablishment = useMemo(() => {
    if (currentCommerce) {
      return joinSentence(currentCommerce.name_establishment || 'commerce');
    } else {
      return "commerce";
    }
  }, [currentCommerce]);

  return (
    <Routes>
      <Route
        path="*"
        element={<Navigate to={`/${nameEstablishment}`} replace />}
      />

      <Route path={`/${nameEstablishment}`} element={<Establishment />} />

      <Route path={`/${nameEstablishment}/schedules`} element={<Schedules />} />

      <Route path={`/${nameEstablishment}/products`} element={<Products />} />

      <Route path={`/${nameEstablishment}/services`} element={<Services />} />
    </Routes>
  );
};

export default RoutesMain;
