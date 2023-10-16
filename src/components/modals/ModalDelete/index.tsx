
interface Props {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    icon: string
    title: string
}

const ModalDelete: React.FC<Props> = ({ icon, setShow, title }) => {
    return (
        <>
        <div onClick={() => setShow(false)} className="fixed w-full h-full left-0 right-0 bottom-0 top-0 m-auto bg-[#00000066] z-[1] " />
        <div className="flex flex-col items-center fixed w-[500px] h-fit bg-[#FFF] m-auto top-0 bottom-0 right-0 left-0 z-[2] rounded-[10px] px-[30px] pt-[50px] pb-[35px] fromTopModal">
            <div className="bg-[#F7F7F7] rounded-full w-[86px] h-[86px] flex items-center justify-center">
               <img src={icon} alt="icon" />
            </div>

            <p className="text-[#141616] text-lg font-semibold mt-5">Excluir {title}</p>
            <p className="text-[#2F3736] text-sm mt-2">Tem certeza que quer excluir esse {title}?</p>

            <div className="flex items-center justify-between mt-4 w-full">
              <button className="w-full border-[1.5px] border-[#2F3A59] rounded-[4px] text-[#141616] py-[9px] mr-2" onClick={() => setShow(false)} >Fechar</button>

              <button className="w-full text-[#FFF] font-semibold rounded-[4px] bg-[#2F3A59] py-[10px] ml-2">Excluir</button>
            </div>
        </div>
        </>
    )
}

export default ModalDelete