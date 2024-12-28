import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

const CreateRequest = () => {
    const navigate = useNavigate();

    const requestSchema = z.object({
        technology: z.string().min(1),
        title: z.string().min(10).max(180),
        desc: z.string().min(50).max(2000),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(requestSchema) });

    const sendToServer = async (data) => {
        // All data will be validation
        const response = await fetch("http://localhost:8888/create", {
            method: "POST", headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }, body: JSON.stringify(data)
        });

        if (response.status === 200) {
            alert("Your request has been posted: Thanks!");
            navigate('/')
        } else {
            alert("Ther is some proplem in sending files!")
        }
        console.log(response);
    }

    return (
        <div className='bg-white p-10 rounded shadow'>
            <h4 className='font-semibold text-xl'>Create your requested</h4>
            <form action="" className='my-5 space-y-5' onSubmit={handleSubmit(sendToServer)}>
                <div>
                    <label htmlFor="technology" className='block font-medium text-gray-600'>Technology</label>
                    <select name="technology" id="technology" className='bg-gray-200 px-4 py-2 rounded outline-none w-full mt-2' {...register("technology")}>
                        <option value="">-- Select Technology --</option>
                        <option value="rust">Rust</option>
                        <option value="golang">GoLang</option>
                        <option value="elixir">Elixir</option>
                        <option value="python">Python</option>
                        <option value="ruby">Ruby</option>
                        <option value="perl">Perl</option>
                        <option value="typescript">TypeScript</option>
                        <option value="javascript">JavaScript</option>
                        <option value="java">Java</option>
                        <option value="swift">Swift</option>
                        <option value="kotlin">Kotlin</option>
                    </select>
                    {errors.technology && <small className='text-red-600 font-medium'>{errors.technology.message}</small>}
                </div>
                <div>
                    <label htmlFor="title" className='block font-medium text-gray-600'>Title</label>
                    <input type="text" name='title' id='title' placeholder='Enter title' className='bg-gray-200 px-4 py-2 rounded outline-none w-full mt-2' {...register("title")} />
                    {errors.title && <small className='text-red-600 font-medium'>{errors.title.message}</small>}
                </div>
                <div>
                    <label htmlFor="desc" className='block font-medium text-gray-600'>Description</label>
                    <textarea type="text" name='desc' id='desc' placeholder='Enter description' className='bg-gray-200 px-4 py-2 rounded outline-none w-full mt-2' {...register("desc")}></textarea>
                    {errors.desc && <small className='text-red-600 font-medium'>{errors.desc.message}</small>}
                </div>
                <div>
                    <button className='px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded'>Submit your request</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRequest;