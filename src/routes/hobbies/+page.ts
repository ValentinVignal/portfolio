type Music = {
	name: string;
	logo: string;
	youtube: string;
	spotify: string;
};

const music: Music[] = [
	{
		name: 'Nikaya',
		youtube: 'https://www.youtube.com/channel/UCCtGlsgk3PQ7z-SJN-XmlDw',
		spotify: 'https://open.spotify.com/artist/3NrJKEXRSxLCphB4A0uvvC?si=Q1ondxrNRz-irtmOlLs1Fg',
		logo: 'https://yt3.googleusercontent.com/m2YNr7t1y1hEwbTnOuFwjD2lPV2_u_K3ZnSUk2x3tKxYSv40n_VagqH-G9KC9mW16DdLduntvw=s160-c-k-c0x00ffffff-no-rj'
	},
	{
		name: 'Veval',
		youtube: 'https://www.youtube.com/channel/UCrmdN_wYhyBobdRFDckQ5Ig',
		spotify: 'https://open.spotify.com/artist/0RU53f8CZezUxV8Dohndlk?si=wr27k7nIQgyEdB-7ls0e0Q',
		logo: 'https://yt3.googleusercontent.com/_kg3tq6_JdBlr-Ph1rLPVFxXbV7gT1_9pogHf9kBf3txBpJPRlE2-n6bWQw-Jvn2FqxlmjVa=s160-c-k-c0x00ffffff-no-rj'
	},
	{
		name: 'Arquets',
		spotify: 'https://open.spotify.com/artist/2K9Zc3SM2yI4zA3RZ5YZyO?si=ZZSJOY3WTS-kWuF62nmRBg',
		youtube: 'https://www.youtube.com/channel/UC3vjZQbRPIeDoI7AtnSNVTA',
		logo: 'https://yt3.googleusercontent.com/mbc6mRrkkYxw0NjbO1GCL5wGzwp_Oi3NzqQ2qBVjOL7kzCYr65KoASj7hNK53MAumGZDLJP4SQ=s160-c-k-c0x00ffffff-no-rj'
	}
];

export const load = () => ({ music });
