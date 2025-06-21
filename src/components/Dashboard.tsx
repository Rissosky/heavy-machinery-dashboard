
import React from 'react';
import { 
  Package, 
  AlertTriangle, 
  Activity, 
  Calendar,
  ArrowUp,
  ArrowDown,
  Plus,
  Search,
  Bell
} from 'lucide-react';

interface DashboardProps {
  selectedRole: string;
  onBackToRoles: () => void;
}

interface KPICard {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  color: string;
}

interface StockItem {
  id: string;
  name: string;
  current: number;
  minimum: number;
  status: 'critical' | 'low' | 'normal';
}

interface Movement {
  id: string;
  item: string;
  type: 'entrada' | 'salida' | 'transferencia';
  quantity: number;
  time: string;
  user: string;
}

const Dashboard: React.FC<DashboardProps> = ({ selectedRole, onBackToRoles }) => {
  const kpis: KPICard[] = [
    {
      title: 'Stock Total',
      value: '2,847',
      icon: Package,
      trend: 'up',
      trendValue: '+5.2%',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Alertas Críticas',
      value: '23',
      icon: AlertTriangle,
      trend: 'down',
      trendValue: '-12%',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Movimientos Hoy',
      value: '156',
      icon: Activity,
      trend: 'up',
      trendValue: '+8.1%',
      color: 'from-industrial-bright to-blue-600'
    },
    {
      title: 'Próximos a Vencer',
      value: '47',
      icon: Calendar,
      trend: 'neutral',
      trendValue: '±0%',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const criticalStock: StockItem[] = [
    { id: '1', name: 'Filtros Hidráulicos CAT 320D', current: 5, minimum: 15, status: 'critical' },
    { id: '2', name: 'Aceite Motor 15W-40 (208L)', current: 8, minimum: 12, status: 'low' },
    { id: '3', name: 'Cadenas Oruga Excavadora', current: 2, minimum: 8, status: 'critical' },
    { id: '4', name: 'Bombas Hidráulicas Komatsu', current: 12, minimum: 10, status: 'normal' },
    { id: '5', name: 'Neumáticos 29.5R25', current: 6, minimum: 15, status: 'critical' }
  ];

  const recentMovements: Movement[] = [
    { id: '1', item: 'Filtros de Aire', type: 'entrada', quantity: 50, time: '10:30', user: 'J. García' },
    { id: '2', item: 'Aceite Hidráulico', type: 'salida', quantity: 25, time: '09:45', user: 'M. López' },
    { id: '3', item: 'Repuestos Motor', type: 'transferencia', quantity: 12, time: '09:15', user: 'A. Ruiz' },
    { id: '4', item: 'Llantas Industriales', type: 'entrada', quantity: 8, time: '08:30', user: 'C. Torres' },
    { id: '5', item: 'Válvulas Hidráulicas', type: 'salida', quantity: 15, time: '08:00', user: 'R. Silva' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-500';
      case 'low': return 'bg-orange-500';
      default: return 'bg-green-500';
    }
  };

  const getMovementTypeColor = (type: string) => {
    switch (type) {
      case 'entrada': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'salida': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'transferencia': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getRoleName = (role: string) => {
    const roleNames = {
      admin: 'Administrador',
      logistics: 'Logística',
      purchases: 'Compras',
      production: 'Producción',
      audit: 'Auditoría'
    };
    return roleNames[role as keyof typeof roleNames] || 'Usuario';
  };

  return (
    <div className="min-h-screen bg-industrial-dark font-inter">
      {/* Header */}
      <header className="bg-gradient-card border-b border-white/10 p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBackToRoles}
              className="text-industrial-text hover:text-white transition-colors"
            >
              <Package className="w-8 h-8" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard de Inventarios</h1>
              <p className="text-industrial-light">Rol: {getRoleName(selectedRole)}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-industrial-bright hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Plus className="w-5 h-5" />
              <span>Nuevo</span>
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${kpi.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    kpi.trend === 'up' ? 'text-green-400' : 
                    kpi.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {kpi.trend === 'up' && <ArrowUp className="w-4 h-4" />}
                    {kpi.trend === 'down' && <ArrowDown className="w-4 h-4" />}
                    <span>{kpi.trendValue}</span>
                  </div>
                </div>
                <h3 className="text-industrial-text text-sm font-medium mb-1">{kpi.title}</h3>
                <p className="text-3xl font-bold text-white">{kpi.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stock Crítico */}
          <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-orange-400" />
              <span>Stock Crítico</span>
            </h2>
            <div className="space-y-4">
              {criticalStock.map((item) => (
                <div key={item.id} className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">{item.name}</h3>
                    <span className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`} />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-industrial-text">Stock: {item.current} / Min: {item.minimum}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === 'critical' ? 'bg-red-500/20 text-red-300' :
                      item.status === 'low' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {item.status === 'critical' ? 'CRÍTICO' : 
                       item.status === 'low' ? 'BAJO' : 'NORMAL'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                    <div 
                      className={`h-2 rounded-full ${getStatusColor(item.status)}`}
                      style={{ width: `${Math.min((item.current / item.minimum) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Movimientos Recientes */}
          <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Activity className="w-6 h-6 text-industrial-bright" />
              <span>Movimientos Recientes</span>
            </h2>
            <div className="space-y-4">
              {recentMovements.map((movement) => (
                <div key={movement.id} className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">{movement.item}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getMovementTypeColor(movement.type)}`}>
                      {movement.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-industrial-text">
                    <span>Cantidad: {movement.quantity}</span>
                    <span>{movement.time} - {movement.user}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
