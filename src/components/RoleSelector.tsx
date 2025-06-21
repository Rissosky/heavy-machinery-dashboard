
import React from 'react';
import { Shield, Truck, ShoppingCart, Cog, ClipboardCheck } from 'lucide-react';

interface Role {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface RoleSelectorProps {
  onRoleSelect: (role: string) => void;
}

const roles: Role[] = [
  {
    id: 'admin',
    title: 'Administrador',
    description: 'Acceso completo al sistema',
    icon: Shield,
    color: 'from-industrial-bright to-industrial-medium'
  },
  {
    id: 'logistics',
    title: 'Logística',
    description: 'Gestión de inventarios y almacén',
    icon: Truck,
    color: 'from-industrial-medium to-industrial-dark'
  },
  {
    id: 'purchases',
    title: 'Compras',
    description: 'Adquisiciones y proveedores',
    icon: ShoppingCart,
    color: 'from-blue-600 to-industrial-medium'
  },
  {
    id: 'production',
    title: 'Producción',
    description: 'Control de líneas productivas',
    icon: Cog,
    color: 'from-industrial-bright to-blue-700'
  },
  {
    id: 'audit',
    title: 'Auditoría',
    description: 'Revisión y control de calidad',
    icon: ClipboardCheck,
    color: 'from-blue-700 to-industrial-dark'
  }
];

const RoleSelector: React.FC<RoleSelectorProps> = ({ onRoleSelect }) => {
  return (
    <div className="min-h-screen bg-industrial-dark flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-inter">
            Sistema de Inventarios
          </h1>
          <p className="text-xl text-industrial-text mb-2">
            Maquinaria Pesada Industrial
          </p>
          <p className="text-lg text-industrial-light">
            Selecciona tu rol para acceder al sistema
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <div
                key={role.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onRoleSelect(role.id)}
              >
                <div className={`
                  relative overflow-hidden rounded-xl p-8 h-64
                  bg-gradient-to-br ${role.color}
                  shadow-lg hover:shadow-2xl
                  transform transition-all duration-300
                  hover:scale-105 hover:-translate-y-2
                  border border-white/10
                `}>
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <div className="mb-6 p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 font-inter">
                      {role.title}
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed">
                      {role.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-full group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-industrial-light animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm">
            © 2024 Sistema de Control de Inventarios | Versión 2.1.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
