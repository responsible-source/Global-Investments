import React from 'react'
import UserNavbar from '../UserNavbar'
import { Briefcase, Envelope, Flag, UserCircle } from '@phosphor-icons/react'
import { User } from '@phosphor-icons/react'

const Profile = () => {
    let user = JSON.parse(localStorage.getItem('userDetails'));
  return (
    <div>
        <UserNavbar />
        <div className=''>
            <h1 className='text-center text-[24px] font-Encode font-semibold'>Profile</h1>
            <div className='flex items-center justify-center mx-auto pb-10'>
            <UserCircle className='text-[10rem]' />
            </div>
            <div className='bg-Green rounded-md'>
                <div className='px-10 py-16 '>
                    <div className='flex gap-3 border-b-2 border-darkBlack'>
                        <User className='text-[3rem]' />
                        <div className='flex-col'>
                            <h4 className='font-Encode font-semibold'>Username</h4>
                            <p>{`${user.username}`}</p>
                        </div>
                    </div>

                    <div className='flex gap-3 border-b-2 border-darkBlack pt-4'>
                        <Envelope className='text-[3rem]' />
                        <div className='flex-col'>
                            <h4 className='font-Encode font-semibold'>Email</h4>
                            <p>{`${user.email}`}</p>
                        </div>
                    </div>

                    <div className='flex gap-3 border-b-2 border-darkBlack pt-4'>
                        <Flag className='text-[3rem]' />
                        <div className='flex-col'>
                            <h4 className='font-Encode font-semibold'>Country</h4>
                            <p>{`${user.country}`}</p>
                        </div>
                    </div>

                    <div className='flex gap-3 border-b-2 border-darkBlack pt-4'>
                        <Briefcase className='text-[3rem]' />
                        <div className='flex-col'>
                            <h4 className='font-Encode font-semibold'>Portfolio Level</h4>
                            <p>Amateur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile