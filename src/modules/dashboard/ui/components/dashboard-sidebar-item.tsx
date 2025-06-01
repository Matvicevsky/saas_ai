import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { ISidebarSection } from './dashboard-sidebar-group'

interface Props {
	section: ISidebarSection
}

export const DashboardSidebarItem = ({ section }: Props) => {
	const pathname = usePathname()
	return (
		<SidebarMenuItem>
			<SidebarMenuButton
				asChild
				className={cn(
					'h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50',
					pathname === section.href &&
						'bg-linear-to-r/oklch border-[#5D6B68]/10'
				)}
				isActive={pathname === section.href}
			>
				<Link href={section.href}>
					<section.icon className='size-5' />
					<span className='text-sm font-medium tracking-tight'>
						{section.label}
					</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	)
}
