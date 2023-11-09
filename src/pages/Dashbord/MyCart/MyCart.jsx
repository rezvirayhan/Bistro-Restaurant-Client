import Swal from 'sweetalert2';
import myCartImg from '../../../assets/icon/myCart.png';
import useCart from "../../../hooks/useCart";
const MyCart = () => {
    const [cart, refetch] = useCart()
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDeleted = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire({ title: "Deleted!", text: "Your file has been deleted.", icon: "success" });
                        }
                    })
            }
        });
    }
    return (
        <div className='w-full px-12 mt-4'>
            <div className="stats shadow flex itmes-center">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Itmes</div>
                    <div className="stat-value text-primary">{cart.length}</div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <button className="btn btn-outline btn-secondary">Pay</button>

                    </div>
                    <div className="stat-title">Total Price</div>
                    <div className="stat-value text-secondary">$ {total}</div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={myCartImg} />
                            </div>
                        </div>
                    </div>
                    {/* <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">31 tasks remaining</div> */}
                </div>

            </div>
            <div className="overflow-x-auto mt-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th className='text-end'>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    {item.name}
                                    <br />
                                    <small>
                                        <span className="badge badge-ghost badge-sm">{item.mentItemId}</span>
                                    </small>
                                </td>
                                <td className='text-end'>{item.price}</td>
                                <td>
                                    <button onClick={() => handleDeleted(item)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MyCart;