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
		// primary | #c9c9c9 
		"--color-primary-50": "247 247 247", // #f7f7f7
		"--color-primary-100": "244 244 244", // #f4f4f4
		"--color-primary-200": "242 242 242", // #f2f2f2
		"--color-primary-300": "233 233 233", // #e9e9e9
		"--color-primary-400": "217 217 217", // #d9d9d9
		"--color-primary-500": "201 201 201", // #c9c9c9
		"--color-primary-600": "181 181 181", // #b5b5b5
		"--color-primary-700": "151 151 151", // #979797
		"--color-primary-800": "121 121 121", // #797979
		"--color-primary-900": "98 98 98", // #626262
		// secondary | #86c1c6 
		"--color-secondary-50": "237 246 246", // #edf6f6
		"--color-secondary-100": "231 243 244", // #e7f3f4
		"--color-secondary-200": "225 240 241", // #e1f0f1
		"--color-secondary-300": "207 230 232", // #cfe6e8
		"--color-secondary-400": "170 212 215", // #aad4d7
		"--color-secondary-500": "134 193 198", // #86c1c6
		"--color-secondary-600": "121 174 178", // #79aeb2
		"--color-secondary-700": "101 145 149", // #659195
		"--color-secondary-800": "80 116 119", // #507477
		"--color-secondary-900": "66 95 97", // #425f61
		// tertiary | #fba7bf 
		"--color-tertiary-50": "254 242 245", // #fef2f5
		"--color-tertiary-100": "254 237 242", // #feedf2
		"--color-tertiary-200": "254 233 239", // #fee9ef
		"--color-tertiary-300": "253 220 229", // #fddce5
		"--color-tertiary-400": "252 193 210", // #fcc1d2
		"--color-tertiary-500": "251 167 191", // #fba7bf
		"--color-tertiary-600": "226 150 172", // #e296ac
		"--color-tertiary-700": "188 125 143", // #bc7d8f
		"--color-tertiary-800": "151 100 115", // #976473
		"--color-tertiary-900": "123 82 94", // #7b525e
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
		// warning | #634545 
		"--color-warning-50": "232 227 227", // #e8e3e3
		"--color-warning-100": "224 218 218", // #e0dada
		"--color-warning-200": "216 209 209", // #d8d1d1
		"--color-warning-300": "193 181 181", // #c1b5b5
		"--color-warning-400": "146 125 125", // #927d7d
		"--color-warning-500": "99 69 69", // #634545
		"--color-warning-600": "89 62 62", // #593e3e
		"--color-warning-700": "74 52 52", // #4a3434
		"--color-warning-800": "59 41 41", // #3b2929
		"--color-warning-900": "49 34 34", // #312222
		// error | #df8681 
		"--color-error-50": "250 237 236", // #faedec
		"--color-error-100": "249 231 230", // #f9e7e6
		"--color-error-200": "247 225 224", // #f7e1e0
		"--color-error-300": "242 207 205", // #f2cfcd
		"--color-error-400": "233 170 167", // #e9aaa7
		"--color-error-500": "223 134 129", // #df8681
		"--color-error-600": "201 121 116", // #c97974
		"--color-error-700": "167 101 97", // #a76561
		"--color-error-800": "134 80 77", // #86504d
		"--color-error-900": "109 66 63", // #6d423f
		// surface | #ffffff 
		"--color-surface-50": "255 255 255", // #ffffff
		"--color-surface-100": "255 255 255", // #ffffff
		"--color-surface-200": "255 255 255", // #ffffff
		"--color-surface-300": "255 255 255", // #ffffff
		"--color-surface-400": "255 255 255", // #ffffff
		"--color-surface-500": "255 255 255", // #ffffff
		"--color-surface-600": "230 230 230", // #e6e6e6
		"--color-surface-700": "191 191 191", // #bfbfbf
		"--color-surface-800": "153 153 153", // #999999
		"--color-surface-900": "125 125 125", // #7d7d7d
	}
}