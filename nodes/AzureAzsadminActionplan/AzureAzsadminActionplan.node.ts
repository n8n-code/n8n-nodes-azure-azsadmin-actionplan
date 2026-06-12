import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminActionplan implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Actionplan',
                name: 'N8nDevAzureAzsadminActionplan',
                icon: { light: 'file:./azure-azsadmin-actionplan.png', dark: 'file:./azure-azsadmin-actionplan.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Deployment Admin Client.',
                defaults: { name: 'Azure Azsadmin Actionplan' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminActionplanApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
