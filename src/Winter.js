// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you

export const Winter = {
	name: 'Winter',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `'Playfair Display', serif, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `'Playfair Display', serif, system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #a8ceff 
		"--color-primary-50": "242 248 255", // #f2f8ff
		"--color-primary-100": "238 245 255", // #eef5ff
		"--color-primary-200": "233 243 255", // #e9f3ff
		"--color-primary-300": "220 235 255", // #dcebff
		"--color-primary-400": "194 221 255", // #c2ddff
		"--color-primary-500": "168 206 255", // #a8ceff
		"--color-primary-600": "151 185 230", // #97b9e6
		"--color-primary-700": "126 155 191", // #7e9bbf
		"--color-primary-800": "101 124 153", // #657c99
		"--color-primary-900": "82 101 125", // #52657d
		// secondary | #499197 
		"--color-secondary-50": "228 239 239", // #e4efef
		"--color-secondary-100": "219 233 234", // #dbe9ea
		"--color-secondary-200": "210 228 229", // #d2e4e5
		"--color-secondary-300": "182 211 213", // #b6d3d5
		"--color-secondary-400": "128 178 182", // #80b2b6
		"--color-secondary-500": "73 145 151", // #499197
		"--color-secondary-600": "66 131 136", // #428388
		"--color-secondary-700": "55 109 113", // #376d71
		"--color-secondary-800": "44 87 91", // #2c575b
		"--color-secondary-900": "36 71 74", // #24474a
		// tertiary | #fe90af 
		"--color-tertiary-50": "255 238 243", // #ffeef3
		"--color-tertiary-100": "255 233 239", // #ffe9ef
		"--color-tertiary-200": "255 227 235", // #ffe3eb
		"--color-tertiary-300": "255 211 223", // #ffd3df
		"--color-tertiary-400": "254 177 199", // #feb1c7
		"--color-tertiary-500": "254 144 175", // #fe90af
		"--color-tertiary-600": "229 130 158", // #e5829e
		"--color-tertiary-700": "191 108 131", // #bf6c83
		"--color-tertiary-800": "152 86 105", // #985669
		"--color-tertiary-900": "124 71 86", // #7c4756
		// success | #63d99a 
		"--color-success-50": "232 249 240", // #e8f9f0
		"--color-success-100": "224 247 235", // #e0f7eb
		"--color-success-200": "216 246 230", // #d8f6e6
		"--color-success-300": "193 240 215", // #c1f0d7
		"--color-success-400": "146 228 184", // #92e4b8
		"--color-success-500": "99 217 154", // #63d99a
		"--color-success-600": "89 195 139", // #59c38b
		"--color-success-700": "74 163 116", // #4aa374
		"--color-success-800": "59 130 92", // #3b825c
		"--color-success-900": "49 106 75", // #316a4b
		// warning | #5e2b2b 
		"--color-warning-50": "231 223 223", // #e7dfdf
		"--color-warning-100": "223 213 213", // #dfd5d5
		"--color-warning-200": "215 202 202", // #d7caca
		"--color-warning-300": "191 170 170", // #bfaaaa
		"--color-warning-400": "142 107 107", // #8e6b6b
		"--color-warning-500": "94 43 43", // #5e2b2b
		"--color-warning-600": "85 39 39", // #552727
		"--color-warning-700": "71 32 32", // #472020
		"--color-warning-800": "56 26 26", // #381a1a
		"--color-warning-900": "46 21 21", // #2e1515
		// error | #da3e35 
		"--color-error-50": "249 226 225", // #f9e2e1
		"--color-error-100": "248 216 215", // #f8d8d7
		"--color-error-200": "246 207 205", // #f6cfcd
		"--color-error-300": "240 178 174", // #f0b2ae
		"--color-error-400": "229 120 114", // #e57872
		"--color-error-500": "218 62 53", // #da3e35
		"--color-error-600": "196 56 48", // #c43830
		"--color-error-700": "164 47 40", // #a42f28
		"--color-error-800": "131 37 32", // #832520
		"--color-error-900": "107 30 26", // #6b1e1a
		// surface | #326cc3 
		"--color-surface-50": "224 233 246", // #e0e9f6
		"--color-surface-100": "214 226 243", // #d6e2f3
		"--color-surface-200": "204 218 240", // #ccdaf0
		"--color-surface-300": "173 196 231", // #adc4e7
		"--color-surface-400": "112 152 213", // #7098d5
		"--color-surface-500": "50 108 195", // #326cc3
		"--color-surface-600": "45 97 176", // #2d61b0
		"--color-surface-700": "38 81 146", // #265192
		"--color-surface-800": "30 65 117", // #1e4175
		"--color-surface-900": "25 53 96", // #193560
	}
}