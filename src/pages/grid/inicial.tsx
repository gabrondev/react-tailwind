import Caixa from "@/components/Caixa";
import Pagina from "@/components/template/Pagina";

export default function Inicial() {
    return (
        <Pagina>
            <div className="
                p-7 grid gap-2.5 grid-cols-3
            ">
                <Caixa className="row-span-2">#1</Caixa>
                <Caixa>#2</Caixa>
                <Caixa>#3</Caixa>
                {/* <Caixa>#4</Caixa> */}
                <Caixa className="col-span-2">#5</Caixa>
                {/* <Caixa>#6</Caixa> */}
                <Caixa className="col-span-2">#7</Caixa>
                {/* <Caixa>#8</Caixa> */}
                <Caixa>#9</Caixa>
                <Caixa>#10</Caixa>
                <Caixa>#11</Caixa>
                <Caixa>#12</Caixa>
            </div>
        </Pagina>
    )
}