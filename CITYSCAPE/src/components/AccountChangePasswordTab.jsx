import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AccountChangePasswordTab = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('New password and confirm password do not match');
            return;
        }
        toast.success('Password changed successfully');
    };

    return (
        <>
           <form onSubmit={handleChangePassword}>
                <div className="card common-card">
                    <div className="card-body">
                        <h6 className="loginRegister__title text-poppins">Password Change </h6>

                        <div className="row gy-lg-4 gy-3">
                            <div className="col-12">
                                <label htmlFor="current-password" className="form-label">Current Password</label>
                                <div className="position-relative">
                                    <input 
                                        type="password" 
                                        className="common-input" 
                                        placeholder="Password" 
                                        id="current-password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#current-password"></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="new-password" className="form-label">New Password</label>
                                <div className="position-relative">
                                    <input 
                                        type="password" 
                                        className="common-input" 
                                        placeholder="Password" 
                                        id="new-password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#new-password"></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <div className="position-relative">
                                    <input 
                                        type="password" 
                                        className="common-input" 
                                        placeholder="Password" 
                                        id="confirm-password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#confirm-password"></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-main w-100">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AccountChangePasswordTab;