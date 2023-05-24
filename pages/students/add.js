import { useEffect, useState } from 'react';
import Layout from "../components/layout";
import { firestore } from '../../firebase';
import { storage } from '../../firebase';


export default function AddStudent() {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [showAlert, setShowAlert] = useState(false);


    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        setProfileImage(file);
    };


    const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload profile image to Firebase Storage
    const imageRef = storage.ref().child(profileImage.name);
    await imageRef.put(profileImage);
    const imageUrlu = await imageRef.getDownloadURL();


    const newStudent = {
        fname,
        lname,
        age,
        grade,
        phone,
        email,
        gender,
        address,
        bio,
        profileImage: imageUrlu,
    };

    firestore
        .collection('students')
        .add(newStudent)
        .then((docRef) => {
        console.log('New student added with ID: ', docRef.id);
        // Clear form fields
        setFName('');
        setLName('');
        setAge('');
        setPhone('');
        setEmail('');
        setGrade('');
        setGender('');
        setAddress('');
        setBio('');
        // Show alert
        setShowAlert(true);
        // Refresh page after 3 seconds
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        })
        .catch((error) => {
        console.error('Error adding student: ', error);
        });
    };
    

return (
<Layout>
<div>
      {/* Alert message */}
        {showAlert && (
            <div className="fixed top-4 z-50 right-4 p-4 bg-blue-500 text-white rounded-md shadow-lg transition duration-500 ease-in-out">
            New student added!
            </div>
        )}
      {/* Your form and other components */}
      {/* ... */}
</div>

{/*     Create teachers code */}
{/* <!-- Card Section --> */}
<div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Card --> */}
    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
        <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        Create your student profile
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
        Manage your name, password and account settings.
        </p>
        </div>

        <div class="mt-5">
         {/* <!-- Form --> */}
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
        <div className="col-span-3">
            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Profile photo
            </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-9">
            <div className="flex items-center gap-5">
            <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="/man.png" alt="Image Description"/>
            <div className="flex gap-x-2">
            <div>
                    <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    <input type="file" onChange={handleProfileImageChange} />
                    </button>
            </div>
            </div>
            </div>
        </div>
        {/* <!-- End Col --> */}


        {/* <div className="col-span-9">
            <div className="flex items-center gap-5">
            <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="/man.png" alt="Image Description"/>
            <div className="flex gap-x-2">
                <div>
                <div className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <label className="relative flex items-center">

                <svg className="w-3 h-3 absolute right-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>
                    <input type="file" placeholder="Upload photo" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-blue-700
                    hover:file:bg-violet-100" />
                </label>
                </div></div>
            </div>
            </div>
        </div>
        <!-- End Col --> */}

        <div className="col-span-3">
            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Full name
            </label>
        </div>
        <div className="col-span-9">
            <div className="sm:flex">
            <input required value={fname} onChange={(e) => setFName(e.target.value)} name="name" id="af-account-full-name" type="text" className="py-2 px-3 pr-11 block w-full  text-gray-900 bg-white  border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-50 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Maria"/>
            <input required value={lname} onChange={(e) => setLName(e.target.value)} type="text" className="py-2 px-3 pr-11 block w-full bg-white border border-gray-200 text-gray-900 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Boone"/>
            </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-3">
            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Age
            </label>
        </div>
        <div className="col-span-9">
            <div className="sm:flex">
            <input value={age} onChange={(e) => setAge(e.target.value)} name="phoneNumber" id="af-account-phone" type="number" className="py-2 px-3 pr-11 block w-full bg-white border border-gray-200 text-gray-800 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Age"/>
            </div>
        </div>
        {/* <!-- End Col --> */}



        <div className="col-span-3">
            <label htmlFor="af-account-class" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Grade/Class
            </label>
        </div>
        <div className="col-span-9">
            <div className="sm:flex">
            <select value={grade} onChange={(e) => setGrade(e.target.value)} id="af-submit-app-category" class="py-2 px-3 pr-9 block w-full bg-white border text-gray-500 border-gray-200 shadow-sm rounded-lg text-sm focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <option selected value="">Select Grade/Class</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            </select>
        </div>
        </div>
        {/* <!-- End Col --> */}



        <div className="col-span-3">
            <div className="inline-block">
            <label htmlFor="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Phone
            </label>
            </div>
        </div>
        <div className="col-span-9">
            <div className="sm:flex">
            <input  value={phone} onChange={(e) => setPhone(e.target.value)} name="phoneNumber" id="af-account-phone" type="text" className="py-2 px-3 pr-11 block w-full text-gray-900 bg-white border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="+x(xxx)xxx-xx-xx"/>
            </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-3">
            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Email
            </label>
            <span className="text-sm text-gray-400 dark:text-gray-600">
                (Optional)
            </span>
        </div>
        {/* <!-- End Col --> */}


        <div className="col-span-9">
            <input  value={email} onChange={(e) => setEmail(e.target.value)} id="af-account-email" type="email" className="py-2 px-3 pr-11 block w-full text-gray-900 bg-white border border-gray-200 shadow-sm text-sm rounded-lg focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="maria@site.com"/>
        </div>

        <div className="col-span-3">
            <label htmlFor="af-account-gender-checkbox" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Gender
            </label>
        </div> 
        <div className="col-span-9">
        <div className="sm:flex">
            <label htmlFor="af-account-gender-checkbox" className="flex py-2 px-3 block w-full bg-white border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="af-account-gender-checkbox"
                className="shrink-0 mt-0.5 bg-white border border-gray-200 rounded-full text-blue-600 pointer-events-none focus:outline-none checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox"
            />
            <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Male</span>
            </label>

            <label htmlFor="af-account-gender-checkbox-female" className="flex py-2 px-3 block w-full border bg-white border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input
                value="Female"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="af-account-gender-checkbox-female"
                className="shrink-0 mt-0.5 bg-white border border-gray-200 checked:bg-blue-500 checked:border-blue-500 rounded-full text-blue-600 pointer-events-none focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox-female"
            />
            <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Female</span>
            </label>

            <label htmlFor="af-account-gender-checkbox-other" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input
                value="other"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="af-account-gender-checkbox-other"
                className="shrink-0 mt-0.5 bg-white border border-gray-200 rounded-full text-blue-600 pointer-events-none focus:outline-non dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox-other"
            />
            <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Other</span>
            </label>
        </div>
        </div>

        <div className="col-span-3">
            <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Address
            </label>
        </div>
        <div className="col-span-9">
            <input  value={address} onChange={(e) => setAddress(e.target.value)} id="af-account-bio" type="address" className="py-2 px-3 block w-full text-gray-900 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows={6} placeholder="Add your location"/>
        </div>
        {/* <!-- End Col --> */}
        <div className="col-span-3">
            <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            BIO
            </label>
        </div>
        <div className="col-span-9">
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} id="af-account-bio" className="py-2 px-3 block w-full bg-white border text-gray-900 border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows={6} placeholder="Type your message..."></textarea>
        </div>
        {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-5 flex justify-end gap-x-2">
        <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            Cancel
        </button>
        <button type="submit" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Save changes
        </button>
        </div>
        </form>
        {/* <!-- End Form --> */}
        </div>
    </div>
{/* <!-- End Card --> */}
</div>
</Layout>
)
}
