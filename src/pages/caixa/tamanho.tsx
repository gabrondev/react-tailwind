import Caixa from "@/components/Caixa";
import Pagina from "@/components/template/Pagina";

export default function Tamanho() {
    return (
        <Pagina>
            <div className="flex flex-col gap-5">
                <Caixa className="w-16 h-16">#1</Caixa>
                <Caixa className="w-4/5">#2</Caixa>
                <Caixa className="w-1/2">#3</Caixa>
                <Caixa className="w-[75%]">#4</Caixa>
                <Caixa className="max-w-[200px]">#5</Caixa>
                <Caixa className="w-full">#6</Caixa>
            </div>
        </Pagina>
    )
}