import { useState } from "react";
import { useDispatch } from "react-redux";

import { orderABC, orderPOB, filterActiv, filterConti } from "../../../Redux/action"; 
import estados from "../../../index/estadosGlobales";

export default function handlers() {

  const dispatch = useDispatch(); 
  const [select1, setSelect1] = useState(''); 
  const [select2, setSelect2] = useState(''); 
  const [select3, setSelect3] = useState(''); 
  const [select4, setSelect4] = useState('');
  const [pais, setPais] = useState({nombre: "" });

  const handleChange = (event) =>{
    setPais({nombre: event.target.value});
  };

  const handleOrderABC = (event) => {
    dispatch(orderABC(event.target.value));
    setSelect1(event.target.value)
    setSelect2("")
  };

  const handleOrderPob = (event) => {
    dispatch(orderPOB(event.target.value));
    setSelect2(event.target.value)
    setSelect1("")
  };

  const handlerFilterConti = (event) => {
    dispatch(filterConti(event.target.value), );
    dispatch(orderABC(""))
    dispatch(orderPOB(""))
    setSelect1("");
    setSelect2("");
    setSelect3(event.target.value)
    setSelect4("Todo")
  };

  const handlerFilterActiv = (event) => {
    dispatch(filterActiv(event.target.value));
    dispatch(orderABC(""))
    dispatch(orderPOB(""))
    setSelect1("");
    setSelect2("");
    setSelect3("Todo")
    setSelect4(event.target.value)
  };

  const reestablecer = () =>{
    dispatch(orderABC(""))
    setSelect1("");
    dispatch(orderPOB(""))
    setSelect2("");
    dispatch(filterConti("Todo"))
    setSelect3("Todo")
    dispatch(filterActiv("Todo"))
    setSelect4("Todo")
  };


  return {
    select1,
    select2,
    select3,
    select4,
    pais,
    setPais,
    handleChange,
    handleOrderABC,
    handleOrderPob,
    handlerFilterActiv, 
    handlerFilterConti,
    reestablecer,
  }
};