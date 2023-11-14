

type Inputs = {
    example: string
    exampleRequired: string
}


export default function App() {



    console.log(watch("example")) // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form >
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test"  />


            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}


            <input type="submit" />
        </form>
    )
}