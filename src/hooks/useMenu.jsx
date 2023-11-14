import { useQuery } from "react-query";

const useMenu = () => {
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setLoding(false)
    //             setMenu(data)
    //         })
    // }, [])


    const { data: menu = [], isLoading: loding, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu')
            return res.json()
        }
    })
    return [menu, loding, refetch]
}

export default useMenu;