import { useSelector } from "react-redux";

export default function estados () {
  const orderABCD = useSelector((state) => state.orderABC);
  const orderPobl = useSelector((state) => state.orderPob);
  const filtroContin = useSelector((state) => state.filtroConti);
  const filtroActivi = useSelector((state) => state.filtroActiv);
  const paisPorNombre = useSelector((state) => state.paisPorNombre);
  const todosLosPaises = useSelector((state) => state.todosLosPaises);
  const actividades = useSelector((state) => state.actividades);

  return { orderABCD, orderPobl, filtroActivi, filtroContin, paisPorNombre, todosLosPaises, actividades }
}