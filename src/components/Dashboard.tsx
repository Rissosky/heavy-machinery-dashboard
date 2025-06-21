
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
  Bell,
  ShoppingCart,
  Users,
  FileText,
  Shield,
  Truck,
  Factory,
  ClipboardCheck,
  TrendingUp,
  Download,
  Clock,
  CheckCircle
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
  location?: string;
}

interface Movement {
  id: string;
  item: string;
  type: 'entrada' | 'salida' | 'transferencia';
  quantity: number;
  time: string;
  user: string;
}

interface Order {
  id: string;
  supplier: string;
  items: number;
  total: string;
  status: 'pendiente' | 'aprobada' | 'retrasada';
  date: string;
}

interface Project {
  id: string;
  name: string;
  progress: number;
  missingParts: number;
  status: 'activo' | 'pausado' | 'completado';
}

interface AuditRecord {
  id: string;
  type: string;
  user: string;
  date: string;
  status: 'validado' | 'pendiente' | 'corregido';
}

const Dashboard: React.FC<DashboardProps> = ({ selectedRole, onBackToRoles }) => {
  const getRoleData = () => {
    switch (selectedRole) {
      case 'logistics':
        return {
          kpis: [
            {
              title: 'Stock Total',
              value: '2,847',
              icon: Package,
              trend: 'up' as const,
              trendValue: '+5.2%',
              color: 'from-green-500 to-green-600'
            },
            {
              title: 'Alertas Críticas',
              value: '23',
              icon: AlertTriangle,
              trend: 'down' as const,
              trendValue: '-12%',
              color: 'from-red-500 to-red-600'
            },
            {
              title: 'Movimientos Hoy',
              value: '156',
              icon: Activity,
              trend: 'up' as const,
              trendValue: '+8.1%',
              color: 'from-industrial-bright to-blue-600'
            },
            {
              title: 'Próximos a Vencer',
              value: '47',
              icon: Calendar,
              trend: 'neutral' as const,
              trendValue: '±0%',
              color: 'from-orange-500 to-orange-600'
            }
          ],
          stockItems: [
            { id: '1', name: 'Filtros Hidráulicos CAT 320D', current: 5, minimum: 15, status: 'critical' as const, location: 'Bodega A' },
            { id: '2', name: 'Aceite Motor 15W-40 (208L)', current: 8, minimum: 12, status: 'low' as const, location: 'Bodega B' },
            { id: '3', name: 'Cadenas Oruga Excavadora', current: 2, minimum: 8, status: 'critical' as const, location: 'Bodega C' },
            { id: '4', name: 'Bombas Hidráulicas Komatsu', current: 12, minimum: 10, status: 'normal' as const, location: 'Bodega A' },
            { id: '5', name: 'Neumáticos 29.5R25', current: 6, minimum: 15, status: 'critical' as const, location: 'Bodega D' }
          ]
        };

      case 'purchases':
        return {
          kpis: [
            {
              title: 'Órdenes Pendientes',
              value: '12',
              icon: ShoppingCart,
              trend: 'up' as const,
              trendValue: '+3',
              color: 'from-blue-500 to-blue-600'
            },
            {
              title: 'Proveedores Activos',
              value: '26',
              icon: Users,
              trend: 'neutral' as const,
              trendValue: '±0%',
              color: 'from-green-500 to-green-600'
            },
            {
              title: 'Cotizaciones (Semana)',
              value: '5',
              icon: FileText,
              trend: 'down' as const,
              trendValue: '-2',
              color: 'from-orange-500 to-orange-600'
            },
            {
              title: 'Precios Actualizados',
              value: '37',
              icon: TrendingUp,
              trend: 'up' as const,
              trendValue: '+12%',
              color: 'from-industrial-bright to-blue-600'
            }
          ],
          orders: [
            { id: '1', supplier: 'Caterpillar Inc.', items: 15, total: '$45,600', status: 'pendiente' as const, date: '2024-06-20' },
            { id: '2', supplier: 'Komatsu Ltd.', items: 8, total: '$23,400', status: 'aprobada' as const, date: '2024-06-19' },
            { id: '3', supplier: 'Volvo CE', items: 22, total: '$67,800', status: 'retrasada' as const, date: '2024-06-18' },
            { id: '4', supplier: 'John Deere', items: 12, total: '$34,200', status: 'pendiente' as const, date: '2024-06-20' },
            { id: '5', supplier: 'Liebherr', items: 6, total: '$18,900', status: 'aprobada' as const, date: '2024-06-19' }
          ]
        };

      case 'production':
        return {
          kpis: [
            {
              title: 'Proyectos Activos',
              value: '4',
              icon: Factory,
              trend: 'neutral' as const,
              trendValue: '±0',
              color: 'from-blue-500 to-blue-600'
            },
            {
              title: 'Kits Ensamblados Hoy',
              value: '7',
              icon: Package,
              trend: 'up' as const,
              trendValue: '+2',
              color: 'from-green-500 to-green-600'
            },
            {
              title: 'Piezas Faltantes',
              value: '11',
              icon: AlertTriangle,
              trend: 'down' as const,
              trendValue: '-3',
              color: 'from-red-500 to-red-600'
            },
            {
              title: 'Insumos en Preparación',
              value: '38',
              icon: Clock,
              trend: 'up' as const,
              trendValue: '+5',
              color: 'from-orange-500 to-orange-600'
            }
          ],
          projects: [
            { id: '1', name: 'Excavadora CAT 320D - Serie A', progress: 75, missingParts: 3, status: 'activo' as const },
            { id: '2', name: 'Bulldozer Komatsu D65 - Serie B', progress: 45, missingParts: 8, status: 'activo' as const },
            { id: '3', name: 'Cargador Volvo L120 - Serie C', progress: 90, missingParts: 0, status: 'activo' as const },
            { id: '4', name: 'Retroexcavadora JD 310 - Serie D', progress: 30, missingParts: 0, status: 'pausado' as const }
          ]
        };

      case 'audit':
        return {
          kpis: [
            {
              title: 'Auditorías Programadas',
              value: '3',
              icon: ClipboardCheck,
              trend: 'neutral' as const,
              trendValue: '±0',
              color: 'from-blue-500 to-blue-600'
            },
            {
              title: 'Movimientos No Validados',
              value: '9',
              icon: AlertTriangle,
              trend: 'down' as const,
              trendValue: '-4',
              color: 'from-orange-500 to-orange-600'
            },
            {
              title: 'Desajustes Detectados',
              value: '2',
              icon: FileText,
              trend: 'up' as const,
              trendValue: '+1',
              color: 'from-red-500 to-red-600'
            },
            {
              title: 'Última Auditoría',
              value: '18/06',
              icon: Calendar,
              trend: 'neutral' as const,
              trendValue: '3 días',
              color: 'from-green-500 to-green-600'
            }
          ],
          auditRecords: [
            { id: '1', type: 'Movimiento de stock', user: 'J. García', date: '2024-06-21 10:30', status: 'pendiente' as const },
            { id: '2', type: 'Transferencia interna', user: 'M. López', date: '2024-06-21 09:45', status: 'validado' as const },
            { id: '3', type: 'Ajuste manual', user: 'A. Ruiz', date: '2024-06-21 09:15', status: 'corregido' as const },
            { id: '4', type: 'Entrada de mercancía', user: 'C. Torres', date: '2024-06-21 08:30', status: 'validado' as const },
            { id: '5', type: 'Salida de producción', user: 'R. Silva', date: '2024-06-21 08:00', status: 'pendiente' as const }
          ]
        };

      case 'admin':
        return {
          kpis: [
            {
              title: 'Usuarios Activos',
              value: '17',
              icon: Users,
              trend: 'up' as const,
              trendValue: '+2',
              color: 'from-green-500 to-green-600'
            },
            {
              title: 'Roles Asignados',
              value: '5',
              icon: Shield,
              trend: 'neutral' as const,
              trendValue: '±0',
              color: 'from-blue-500 to-blue-600'
            },
            {
              title: 'Último Acceso',
              value: '09:43',
              icon: Clock,
              trend: 'neutral' as const,
              trendValue: 'Hoy',
              color: 'from-industrial-bright to-blue-600'
            },
            {
              title: 'Tareas Críticas',
              value: '6',
              icon: AlertTriangle,
              trend: 'down' as const,
              trendValue: '-2',
              color: 'from-red-500 to-red-600'
            }
          ],
          systemData: [
            { id: '1', module: 'Sistema de Inventarios', status: 'Operativo', lastBackup: '2024-06-21 03:00', users: 17 },
            { id: '2', module: 'Gestión de Usuarios', status: 'Operativo', lastBackup: '2024-06-21 03:00', users: 5 },
            { id: '3', module: 'Auditoría y Logs', status: 'Operativo', lastBackup: '2024-06-21 03:00', users: 12 },
            { id: '4', module: 'Reportes', status: 'Mantenimiento', lastBackup: '2024-06-20 03:00', users: 8 }
          ]
        };

      default:
        return { kpis: [], stockItems: [] };
    }
  };

  const roleData = getRoleData();
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
      case 'pendiente': return 'bg-orange-500';
      case 'retrasada': return 'bg-red-500';
      case 'pausado': return 'bg-orange-500';
      case 'corregido': return 'bg-orange-500';
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

  const getRoleIcon = (role: string) => {
    const roleIcons = {
      admin: Shield,
      logistics: Truck,
      purchases: ShoppingCart,
      production: Factory,
      audit: ClipboardCheck
    };
    return roleIcons[role as keyof typeof roleIcons] || Package;
  };

  const RoleIcon = getRoleIcon(selectedRole);

  const renderRoleSpecificContent = () => {
    switch (selectedRole) {
      case 'logistics':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Stock Crítico por Bodega */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
                <span>Stock Crítico por Bodega</span>
              </h2>
              <div className="space-y-4">
                {roleData.stockItems?.map((item) => (
                  <div key={item.id} className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{item.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-industrial-text">{item.location}</span>
                        <span className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`} />
                      </div>
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
        );

      case 'purchases':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Órdenes Pendientes */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <ShoppingCart className="w-6 h-6 text-blue-400" />
                <span>Órdenes por Aprobar</span>
              </h2>
              <div className="space-y-4">
                {roleData.orders?.map((order) => (
                  <div key={order.id} className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{order.supplier}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === 'pendiente' ? 'bg-orange-500/20 text-orange-300' :
                        order.status === 'aprobada' ? 'bg-green-500/20 text-green-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {order.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-industrial-text">
                      <span>{order.items} ítems - {order.total}</span>
                      <span>{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alertas de Reabastecimiento */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
                <span>Alertas de Reabastecimiento</span>
              </h2>
              <div className="space-y-4">
                {roleData.stockItems?.slice(0, 3).map((item) => (
                  <div key={item.id} className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{item.name}</h3>
                      <span className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`} />
                    </div>
                    <div className="text-sm text-industrial-text">
                      <span>Stock actual: {item.current} | Mínimo: {item.minimum}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'production':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Proyectos Activos */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <Factory className="w-6 h-6 text-blue-400" />
                <span>Proyectos por Línea</span>
              </h2>
              <div className="space-y-4">
                {roleData.projects?.map((project) => (
                  <div key={project.id} className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{project.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        project.status === 'activo' ? 'bg-green-500/20 text-green-300' :
                        project.status === 'pausado' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-industrial-text mb-2">
                      <span>Progreso: {project.progress}%</span>
                      <span>Faltantes: {project.missingParts}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-green-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock por Línea */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <Package className="w-6 h-6 text-industrial-bright" />
                <span>Disponibilidad de Kits</span>
              </h2>
              <div className="space-y-4">
                <div className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">Kit Excavadora - Línea A</h3>
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-sm text-industrial-text">Disponible: 12 kits completos</div>
                </div>
                <div className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">Kit Bulldozer - Línea B</h3>
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                  </div>
                  <div className="text-sm text-industrial-text">Disponible: 3 kits (8 piezas faltantes)</div>
                </div>
                <div className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">Kit Cargador - Línea C</h3>
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-sm text-industrial-text">Disponible: 8 kits completos</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'audit':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Historial de Movimientos */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <ClipboardCheck className="w-6 h-6 text-blue-400" />
                <span>Movimientos por Validar</span>
              </h2>
              <div className="space-y-4">
                {roleData.auditRecords?.map((record) => (
                  <div key={record.id} className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{record.type}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        record.status === 'pendiente' ? 'bg-orange-500/20 text-orange-300' :
                        record.status === 'validado' ? 'bg-green-500/20 text-green-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {record.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-industrial-text">
                      <span>{record.user}</span>
                      <span>{record.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reportes y Exportación */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <Download className="w-6 h-6 text-green-400" />
                <span>Reportes Descargables</span>
              </h2>
              <div className="space-y-4">
                <button className="w-full bg-industrial-dark/50 hover:bg-industrial-dark/70 rounded-lg p-4 border border-white/5 text-left transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium text-sm">Reporte de Movimientos</h3>
                      <p className="text-xs text-industrial-text">Últimos 30 días</p>
                    </div>
                    <Download className="w-5 h-5 text-industrial-text" />
                  </div>
                </button>
                <button className="w-full bg-industrial-dark/50 hover:bg-industrial-dark/70 rounded-lg p-4 border border-white/5 text-left transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium text-sm">Auditoria Completa</h3>
                      <p className="text-xs text-industrial-text">PDF detallado</p>
                    </div>
                    <Download className="w-5 h-5 text-industrial-text" />
                  </div>
                </button>
                <button className="w-full bg-industrial-dark/50 hover:bg-industrial-dark/70 rounded-lg p-4 border border-white/5 text-left transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium text-sm">Logs de Usuario</h3>
                      <p className="text-xs text-industrial-text">Excel con accesos</p>
                    </div>
                    <Download className="w-5 h-5 text-industrial-text" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'admin':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gestión de Usuarios */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <Users className="w-6 h-6 text-blue-400" />
                <span>Usuarios Activos</span>
              </h2>
              <div className="space-y-4">
                <div className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">Administradores</h3>
                    <span className="text-industrial-text text-sm">3 usuarios</span>
                  </div>
                  <div className="text-xs text-industrial-text">Último acceso: Hoy 09:43</div>
                </div>
                <div className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">Logística</h3>
                    <span className="text-industrial-text text-sm">5 usuarios</span>
                  </div>
                  <div className="text-xs text-industrial-text">Último acceso: Hoy 11:20</div>
                </div>
                <div className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">Compras</h3>
                    <span className="text-industrial-text text-sm">4 usuarios</span>
                  </div>
                  <div className="text-xs text-industrial-text">Último acceso: Hoy 10:15</div>
                </div>
                <div className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">Producción</h3>
                    <span className="text-industrial-text text-sm">3 usuarios</span>
                  </div>
                  <div className="text-xs text-industrial-text">Último acceso: Hoy 08:30</div>
                </div>
                <div className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium text-sm">Auditoría</h3>
                    <span className="text-industrial-text text-sm">2 usuarios</span>
                  </div>
                  <div className="text-xs text-industrial-text">Último acceso: Ayer 16:45</div>
                </div>
              </div>
            </div>

            {/* Estado del Sistema */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span>Estado del Sistema</span>
              </h2>
              <div className="space-y-4">
                {roleData.systemData?.map((system) => (
                  <div key={system.id} className="bg-industrial-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{system.module}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        system.status === 'Operativo' ? 'bg-green-500/20 text-green-300' :
                        'bg-orange-500/20 text-orange-300'
                      }`}>
                        {system.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-industrial-text">
                      <span>Backup: {system.lastBackup}</span>
                      <span>{system.users} usuarios</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
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
              <RoleIcon className="w-8 h-8" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard - {getRoleName(selectedRole)}</h1>
              <p className="text-industrial-light">Sistema de Control de Inventarios</p>
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
          {roleData.kpis?.map((kpi, index) => {
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

        {/* Role-specific content */}
        {renderRoleSpecificContent()}
      </div>
    </div>
  );
};

export default Dashboard;
