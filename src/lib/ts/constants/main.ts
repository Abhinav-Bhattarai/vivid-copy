import { env } from '$env/dynamic/public';
import LL from '$i18n/i18n-svelte';
import { advancedModeApp } from '$ts/stores/advancedMode';
import type { TModelNameCog, TSchedulerNameCog } from '$ts/types/cog';
import type { TTab } from '$ts/types/main';
import { derived, type Readable, type Writable } from 'svelte/store';

export const serverUrl = env.PUBLIC_DEFAULT_SERVER_URL;
export const estimatedDurationBufferRatio = 0.1;
export const estimatedDurationDefault = 20;
export const estimatedDurationUpscaleDefault = 15;
export const canonicalUrl = 'https://vividgen.com';
export const defaultLocale: Locales = 'en';
export const apiBase =
	env.PUBLIC_APP_MODE === 'development'
		? env.PUBLIC_GO_SERVER_URL_DEV
		: env.PUBLIC_GO_SERVER_URL_PROD;

export const routesWithHealthCheck = ['/', '/history', '/canvas'];
export const routesWithHiddenFooter = ['/canvas'];

export const maxProPixelSteps = 640 * 640 * 50;

export const allowedRedirectRoutes = [
	'/',
	'/pro',
	'/history',
	'/gallery',
	'/blog',
	'/account',
	'/admin',
	'/admin/servers',
	'/admin/users',
	'/admin/gallery',
	'/TOS',
	'/privacy-policy',
	"/credit-recharge"
];

export const isAllowedRedirectRoute = (route: string) => {
	let allowed = false;
	for (const r of allowedRedirectRoutes) {
		if (route === r || (r !== '/' && route.startsWith(`${r}/`))) {
			allowed = true;
			break;
		}
	}
	return allowed;
};

export const modalCloseDelay = 120;

export const maxSeed = 2147483647;
export const maxPromptLength = 500;

export const availableWidths = ['384', '512', '640', '768'];
export type TAvailableWidth = typeof availableWidths[number];
export const availableWidthsFree: TAvailableWidth[] = ['512'];
export const widthTabs: TTab<TAvailableWidth>[] = [
	{ label: '384', value: '384' },
	{ label: '512', value: '512' },
	{ label: '640', value: '640' },
	{ label: '768', value: '768' }
];
export const widthDefault: TAvailableWidth = '512';

export const availableHeights = ['384', '512', '640', '768'];
export type TAvailableHeight = typeof availableWidths[number];
export const availableHeightsFree: TAvailableHeight[] = ['512'];
export const heightTabs: TTab<TAvailableHeight>[] = [
	{ label: '384', value: '384' },
	{ label: '512', value: '512' },
	{ label: '640', value: '640' },
	{ label: '768', value: '768' }
];
export const heightDefault: TAvailableHeight = '512';

export const availableInferenceSteps = ['30', '40', '50'];
export type TAvailableInferenceSteps = typeof availableInferenceSteps[number];
export const availableInferenceStepsFree: TAvailableInferenceSteps[] = ['30'];
export const inferenceStepsTabs: TTab<TAvailableInferenceSteps>[] = [
	{ label: '30', value: '30' },
	{ label: '40', value: '40' },
	{ label: '50', value: '50' }
];
export const inferenceStepsDefault: TAvailableInferenceSteps = '30';

export const guidanceScaleMax = 20;
export const guidanceScaleMin = 1;
export const guidanceScaleDefault = 7;

// Model IDs
export const availableModelIds = [
	'048b4aa3-5586-47ed-900f-f4341c96bdb2',
] as const;

export type TAvailableModelId = typeof availableModelIds[number];

export const availableModelIdsFree: TAvailableModelId[] = [
	'048b4aa3-5586-47ed-900f-f4341c96bdb2',
];

export const modelIdDefault: TAvailableModelId = '048b4aa3-5586-47ed-900f-f4341c96bdb2';

export const modelIdToModelNameCog: Record<TAvailableModelId, TModelNameCog> = {
	'048b4aa3-5586-47ed-900f-f4341c96bdb2': 'Gomu Gomu - Anime Model',
};

export const modelIdToDisplayName = derived<
	[Writable<boolean>, Readable<TranslationFunctions>],
	Record<TAvailableModelId, string>
>([advancedModeApp, LL], ([$advancedModeApp, $LL]) => {
	return {
		'048b4aa3-5586-47ed-900f-f4341c96bdb2': "Gomu Gomu Model"
	};
});

export const availableModelIdDropdownItems = derived(
	modelIdToDisplayName,
	($modelIdToDisplayName) => {
		const items: TTab<TAvailableModelId>[] = [
			{
				label: $modelIdToDisplayName['048b4aa3-5586-47ed-900f-f4341c96bdb2'],
				value: '048b4aa3-5586-47ed-900f-f4341c96bdb2'
			}
		];
		return items;
	}
);

// Scheduler IDs
export const availableSchedulerIds = [
	'55027f8b-f046-4e71-bc51-53d5448661e0',
	'6fb13b76-9900-4fa4-abf8-8f843e034a7f',
	'af2679a4-dbbb-4950-8c06-c3bb15416ef6',
	'efee957a-dea5-48b2-a66a-1990dc2265c5',
	'9d175114-9a26-4371-861c-729ba9ecb4da',
	'7e98751f-e135-4206-b855-48b141e7b98f'
] as const;

export type TAvailableSchedulerId = typeof availableSchedulerIds[number];

export const availableSchedulerIdsFree: TAvailableSchedulerId[] = [
	'55027f8b-f046-4e71-bc51-53d5448661e0',
	'6fb13b76-9900-4fa4-abf8-8f843e034a7f',
	'af2679a4-dbbb-4950-8c06-c3bb15416ef6'
];

export const schedulerIdDefault: TAvailableSchedulerId = '6fb13b76-9900-4fa4-abf8-8f843e034a7f';

export const schedulerIdToSchedulerNameCog: Record<TAvailableSchedulerId, TSchedulerNameCog> = {
	'55027f8b-f046-4e71-bc51-53d5448661e0': 'K_LMS',
	'6fb13b76-9900-4fa4-abf8-8f843e034a7f': 'K_EULER',
	'af2679a4-dbbb-4950-8c06-c3bb15416ef6': 'K_EULER_ANCESTRAL',
	'efee957a-dea5-48b2-a66a-1990dc2265c5': 'HEUN',
	'9d175114-9a26-4371-861c-729ba9ecb4da': 'DPM',
	'7e98751f-e135-4206-b855-48b141e7b98f': 'DPM_SINGLESTEP'
};

export const schedulerIdToDisplayName = derived<
	[Readable<TranslationFunctions>],
	Record<TAvailableSchedulerId, string>
>([LL], ([$LL]) => {
	return {
		'55027f8b-f046-4e71-bc51-53d5448661e0':
			$LL.Shared.SchedulerOptions['55027f8b-f046-4e71-bc51-53d5448661e0'].realName(),
		'6fb13b76-9900-4fa4-abf8-8f843e034a7f':
			$LL.Shared.SchedulerOptions['6fb13b76-9900-4fa4-abf8-8f843e034a7f'].realName(),
		'af2679a4-dbbb-4950-8c06-c3bb15416ef6':
			$LL.Shared.SchedulerOptions['af2679a4-dbbb-4950-8c06-c3bb15416ef6'].realName(),
		'efee957a-dea5-48b2-a66a-1990dc2265c5':
			$LL.Shared.SchedulerOptions['efee957a-dea5-48b2-a66a-1990dc2265c5'].realName(),
		'9d175114-9a26-4371-861c-729ba9ecb4da':
			$LL.Shared.SchedulerOptions['9d175114-9a26-4371-861c-729ba9ecb4da'].realName(),
		'7e98751f-e135-4206-b855-48b141e7b98f':
			$LL.Shared.SchedulerOptions['7e98751f-e135-4206-b855-48b141e7b98f'].realName()
	};
});

export const availableSchedulerIdDropdownItems = derived(
	[schedulerIdToDisplayName],
	([$schedulerIdToDisplayName]) => {
		const items: TTab<TAvailableSchedulerId>[] = [
			{
				label: $schedulerIdToDisplayName['55027f8b-f046-4e71-bc51-53d5448661e0'],
				value: '55027f8b-f046-4e71-bc51-53d5448661e0'
			},
			{
				label: $schedulerIdToDisplayName['6fb13b76-9900-4fa4-abf8-8f843e034a7f'],
				value: '6fb13b76-9900-4fa4-abf8-8f843e034a7f'
			},
			{
				label: $schedulerIdToDisplayName['af2679a4-dbbb-4950-8c06-c3bb15416ef6'],
				value: 'af2679a4-dbbb-4950-8c06-c3bb15416ef6'
			} /* ,
			{
				label: $schedulerIdToDisplayName['efee957a-dea5-48b2-a66a-1990dc2265c5'],
				value: 'efee957a-dea5-48b2-a66a-1990dc2265c5'
			},
			{
				label: $schedulerIdToDisplayName['9d175114-9a26-4371-861c-729ba9ecb4da'],
				value: '9d175114-9a26-4371-861c-729ba9ecb4da'
			},
			{
				label: $schedulerIdToDisplayName['7e98751f-e135-4206-b855-48b141e7b98f'],
				value: '7e98751f-e135-4206-b855-48b141e7b98f'
			} */
		];
		return items;
	}
);

export const eurCountryCodes = [
	'BE',
	'BG',
	'CY',
	'CZ',
	'DE',
	'DK',
	'EE',
	'ES',
	'FI',
	'FR',
	'HR',
	'HU',
	'IT',
	'LT',
	'LU',
	'LV',
	'MT',
	'NL',
	'PL',
	'PT',
	'RO',
	'SE',
	'SI',
	'SK'
];
