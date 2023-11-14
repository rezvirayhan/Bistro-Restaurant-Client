import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const AddItem = () => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    const { register, reset, handleSubmit, formState: { errors },
    } = useForm()
    const onSubmit = data => {
        const formData = new formData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                console.log(imageResponse);
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




