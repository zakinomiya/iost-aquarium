import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Router from 'next/router'


export const ListItems = (
	<div>
		<ListItem button onClick={() => Router.push('/')}>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Account" />
		</ListItem>
		<ListItem button onClick={() => Router.push('/editor')} >
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Editor" />
		</ListItem>
	</div>
)