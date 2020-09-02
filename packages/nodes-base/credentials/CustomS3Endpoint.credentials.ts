import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class CustomS3Endpoint implements ICredentialType {
	name = 'customS3Endpoint';
	displayName = 'Custom S3';
	properties = [
		{
			displayName: 'S3 endpoint',
			name: 'endpoint',
			type: 'string' as NodePropertyTypes,
			default: ''
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string' as NodePropertyTypes,
			default: 'us-east-1',
		},
		{
			displayName: 'Access Key Id',
			name: 'accessKeyId',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Secret Access Key',
			name: 'secretAccessKey',
			type: 'string' as NodePropertyTypes,
			default: '',
			typeOptions: {
				password: true,
			},
		},
		{
			displayName: 'Force path style',
			name: 'forcePathStyle',
			type: 'boolean' as NodePropertyTypes,
			default: false
		},
	];
}
