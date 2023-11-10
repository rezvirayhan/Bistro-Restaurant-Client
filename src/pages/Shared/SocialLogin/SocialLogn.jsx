import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import googleLogin from '../../../assets/icon/googleLogin.png';
import { AuthContext } from '../../../providers/AuthProvider';
const SocialLogn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const { googleSignin } = useContext(AuthContext)
    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const logedInUser = result.user;
                const saveUser = { name: logedInUser.displayName, email: logedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        
                    })
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='w-full text-center mb-4'>
                <button onClick={handleGoogleSignin} className="btn btn-circle btn-outline">
                    <img src={googleLogin} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogn;