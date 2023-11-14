import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const AddItem = () => {
    let timerInterval;
    const [axiosSecure] = useAxiosSecure()
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgUrl = imageResponse.data.display_url
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    title: "Auto close alert!",
                                    html: "I will close in <b></b> milliseconds.",
                                    timer: 2000,
                                    timerProgressBar: true,
                                    didOpen: () => {
                                        Swal.showLoading();
                                        const timer = Swal.getPopup().querySelector("b");
                                        timerInterval = setInterval(() => {
                                            timer.textContent = `${Swal.getTimerLeft()}`;
                                        }, 100);
                                    },
                                    willClose: () => {
                                        clearInterval(timerInterval);
                                    }
                                }).then((result) => {
                                    /* Read more about handling dismissals below */
                                    if (result.dismiss === Swal.DismissReason.timer) {
                                        console.log("I was closed by the timer");
                                    }
                                });
                            }
                        })
                }
            })

    }
    return (
        <div className="w-full px-10">
            <div>
                <SectionTitle
                    subHedding="What's New"
                    hedding="Add an New Itmes"></SectionTitle>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-10">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input
                        {...register("name", { require: true })}
                        type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Catagory</span>
                    </label>
                    <select defaultValue="Pick One"  {...register("category", { require: true })} className="select select-bordered">
                        <option disabled>Pick One</option>
                        <option>Salad</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input  {...register("price", { require: true })} type="number" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">File Upload</span>
                    </label>
                    <input  {...register("image", { require: true })} type="file" className="file-input file-input-bordered w-full " />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details</span>
                    </label>
                    <textarea  {...register("recipe", { require: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div> <br />
                <input className="btn btn-secondary mt-2 w-1/2" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddItem;




