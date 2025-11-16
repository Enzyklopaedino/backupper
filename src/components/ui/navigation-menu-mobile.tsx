import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/src/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { BookOpen, Home, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigationMenuItems = [
	{ title: 'Home', href: '/', icon: Home, isActive: true },
	{ title: 'Docs', href: '/docs', icon: BookOpen },
	{ title: 'Account', href: '/account', icon: Settings },
	{ title: 'Settings', href: '/settings', icon: User },
];

export default function NavigationMenuMobile() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{navigationMenuItems.map((item) => (
					<NavigationMenuItem key={item.title}>
						<NavigationMenuLink
							className={cn(
								navigationMenuTriggerStyle(),
								'flex flex-col h-auto items-center px-5 py-2.5',
							)}
							active={item.isActive}
							asChild
						>
							<Link to={item.href}>
								<item.icon className="mb-1.5 h-5 w-5" />
								{item.title}
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
