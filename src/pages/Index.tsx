
import React, { useState } from 'react';
import RoleSelector from '../components/RoleSelector';
import Dashboard from '../components/Dashboard';

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    console.log('Role selected:', role);
    setSelectedRole(role);
  };

  const handleBackToRoles = () => {
    setSelectedRole(null);
  };

  return (
    <div className="font-inter">
      {!selectedRole ? (
        <RoleSelector onRoleSelect={handleRoleSelect} />
      ) : (
        <Dashboard selectedRole={selectedRole} onBackToRoles={handleBackToRoles} />
      )}
    </div>
  );
};

export default Index;
