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
								<SidebarMenuItem key={section.href}>
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
								<SidebarMenuItem key={section.href}>
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
