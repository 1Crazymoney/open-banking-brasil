export interface IBanksProps {
	brandName: string
	apiUrl: string
	style: any
	logoWidth: string
}
export const banks: IBanksProps[] = [
	{
		brandName: 'Banco do Brasil S/A',
		apiUrl: 'https://bb-api.concore.io',
		style: {
			backgroundColor: '#FBAB7E',
			backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
		},
		logoWidth: '40px',
	},
	{
		brandName: 'Grupo Pan',
		apiUrl: 'https://bancopan-api.concore.io',
		style: {
			backgroundImage:
				'radial-gradient( circle 732px at -23.9% -25.1%,  #0043ff 6.1%, #00C5FF 100.2% )',
		},
		logoWidth: '40px',
	},
	{
		brandName: 'Banco Bradesco',
		apiUrl: 'https://api.bradesco.com/bradesco',
		style: { background: 'linear-gradient(180deg, #cc092f 0%, #b2207b 100%)' },
		logoWidth: '50px',
	},
	{
		brandName: 'Itaú',
		apiUrl: 'https://itau-api.concore.io',
		style: {
			background: 'linear-gradient( 0deg,  #ff9d00 11.2%, rgba(255,0,0,1) 100.2% )',
		},
		logoWidth: '50px',
	},
	{
		brandName: 'Banco Digital Next',
		apiUrl: 'https://api.bradesco.com/next',
		style: {
			background: 'linear-gradient( 110deg,  #1D3B3B 11.2%, #3cc974 100.2% )',
		},
		logoWidth: '35px',
	},
]
