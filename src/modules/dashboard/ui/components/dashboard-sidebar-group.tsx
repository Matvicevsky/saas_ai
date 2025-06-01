import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
} from '@/components/ui/sidebar'
import { DashboardSidebarItem } from './dashboard-sidebar-item'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { LucideProps } from 'lucide-react'

export interface ISidebarSection {
	href: string
	label: string
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
}

interface Props {
	sections: ISidebarSection[]
}

export const DashboardSidebarGroup = ({ sections }: Props) => {
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{sections.map((section) => (
						<DashboardSidebarItem key={section.href} section={section} />
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}
