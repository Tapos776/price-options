import { BsFillPatchCheckFill } from 'react-icons/bs';
const Feature = ({features}) => {
    return (
        <div className='my-2 flex-grow '>
            <p className='flex items-center gap-3  '><BsFillPatchCheckFill className='text-green-500 '></BsFillPatchCheckFill> {features}</p>
        </div>
    );
};

export default Feature;