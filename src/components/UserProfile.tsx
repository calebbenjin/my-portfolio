import React from 'react'
import Image from "next/image";

const UserProfile = () => {
  return (
    <div className="w-30 h-30 rounded-full bg-red-400 relative overflow-hidden">
      <Image
        src="/profle.jpg"
        alt="Caleb Benjamin Profile Image"
        width={400}
        height={400}
      />
    </div>
  );
}

export default UserProfile
