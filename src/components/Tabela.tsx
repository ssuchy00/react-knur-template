import { useEffect } from "react"

 const Tabela = (props : any) => {

    useEffect(()=>{
        props.tabela.sort((a : any, b : any)=>{a-b})
 }, [])

    return (
        <table>
            <tbody>
            {
                props && props.tabela &&
                props.tabela.sort((a : any,b : any)=>{return a.wiek - b.wiek}).map((e : any, key : any)=>{
                    return( 
                    <tr key={"tr"+key}>
                        <td>{e.name}</td>
                        <td>{e.wiek}</td>
                        <td><img src={e.obrazek} width="50"/></td>
                    </tr>)
                }) 
            }
            </tbody>
        </table>
    )
}

export default Tabela