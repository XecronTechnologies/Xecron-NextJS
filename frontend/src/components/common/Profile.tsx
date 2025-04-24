import React from 'react';
import Button from '@mui/material/Button';
import { UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';

// interface ProfileIconProps {
//   className?: string;
// }

const ProfileIcon: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/login');
    };

    return (
        <Button onClick={handleClick} sx={{ minWidth: 'auto', padding: 0, borderRadius: '50%' }}>
            <div style={{ width: '100%', height: '100%' }}>
                <UserRound />
            </div>
        </Button>
    );
};

export default ProfileIcon;
