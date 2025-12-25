import { Home, FlaskConical, Download, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export function QuickActionDock() {
  const actions = [
    { icon: Home, label: 'Home Collection', to: '/services#home-collection' },
    { icon: FlaskConical, label: 'Book Scan', to: '/services#radiology' },
    { icon: Download, label: 'Download Report', to: '#' },
    { icon: Stethoscope, label: 'Consult Doctor', to: '#' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl px-6 py-3 border border-[#C5A059]/20">
        <div className="flex items-center gap-6">
          {actions.map((action, index) => (
            <Link
              key={index}
              to={action.to}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B2545] to-[#06152a] flex items-center justify-center group-hover:from-[#C5A059] group-hover:to-[#B08D55] transition-all duration-300 shadow-lg group-hover:scale-110">
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-[#0B2545] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
