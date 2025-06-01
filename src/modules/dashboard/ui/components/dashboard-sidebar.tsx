'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { BotIcon, StarIcon, VideoIcon } from 'lucide-react'

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { DashboardUserButton } from './dashboard-user-button'
import { DashboardSidebarItem } from './dashboard-swdebar-item'

const firstSection = [
	{
		icon: VideoIcon,
		label: 'Meetings',
		href: '/meetings',
	},
	{
		icon: BotIcon,
		label: 'Agents',
		href: '/agents',
	},
]

const secondSection = [
	{
		icon: StarIcon,
		label: 'Upgrade',
		href: '/upgrade',
	},
]

export const DashboardSidebar = () => {
	const pathname = usePathname()

	return (
		<Sidebar>
			<SidebarHeader className='text-shadow-accent-foreground'>
				<Link href='/' className='flex items-center gap-2 px-2 pt-2'>
					<Image src='/logo.svg' alt='logo icon' height={36} width={36} />
					<p className='text-2xl font-semibold'>Meet.AI</p>
				</Link>
			</SidebarHeader>
			<div className='px-4 py-2'>
				<Separator className='opacity-10 text-[#5d6b68]' />
			</div>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{firstSection.map((section) => (
								<DashboardSidebarItem key={section.href} section={section} />
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<div className='px-4 py-2'>
					<Separator className='opacity-10 text-[#5d6b68]' />
				</div>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{secondSection.map((section) => (
								<DashboardSidebarItem key={section.href} section={section} />
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className='text-white'>
				<DashboardUserButton />
			</SidebarFooter>
		</Sidebar>
	)
}
