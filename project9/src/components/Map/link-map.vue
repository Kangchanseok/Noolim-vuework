<template>
	<article class="examples__block">
		<h2 class="examples__block__title">
			Korea SVG map as links
		</h2>
		<div class="examples__block__info">
			<div class="examples__block__info__item">
				Pointed location: {{ pointedLocation }}
			</div>
			<div class="examples__block__info__item">
				Focused location: {{ focusedLocation }}
			</div>
			<div class="examples__block__info__item">
				Clicked location: {{ clickedLocation }}
			</div>
		</div>

		<Korea />

		
		<div class="examples__block__map">
			<svg-map
				:map="Korea"
				location-role="link"
				@mouseover="pointLocation"
				@mouseout="unpointLocation"
				@focus="focusLocation"
				@blur="blurLocation"
				@click="clickLocation"
				
				/>
				
			</div>
	</article>
</template>

<script>
import Korea from './Location.vue' 
import { getLocationName } from './index'
import SvgMap from './svg-map.vue'

const URL = {
	jungnang: '',
	seongbuk: '',
	gangbuk: '',
	dobong: '',
	nowon: '',
	eunpyeong: 'https://www.ep.go.kr/',
	seodaemun: '',
	mapo: '',
	yangcheon: '',
	gangseo: '',
	guro: '',
	geumcheon: '',
	yeongdeungpo: '',
	dongjak: '',
	gwanak: '',
	seocho: '',
	gangnam: '',
	songpa: '',
	gangdong: ''
}

export default {
	name: 'LinkMap',
	components: {
		Korea,
		SvgMap,

	
	},
	data() {
		return {
			Korea,
			pointedLocation: null,
			focusedLocation: null,
			clickedLocation: null,
			// tooltipStyle: null,
		}
	},
	methods: {
		pointLocation(event) {
			this.pointedLocation = getLocationName(event.target)
		},
		// unpointLocation(event) {
		// 	this.pointedLocation = null
		// },
		focusLocation(event) {
			this.focusedLocation = getLocationName(event.target)
		},
		// blurLocation(event) {
		// 	this.focusedLocation = null
		// },
		clickLocation(event) {
			this.clickedLocation = getLocationName(event.target)
			window.open(URL[event.target.id], '_blank')
		},
		// moveOnLocation(event) {
		// 	this.tooltipStyle = {
		// 		display: 'block',
		// 		top: `${event.clientY + 10}px`,
		// 		left: `${event.clientX - 100}px`,
		// 	}
		// },
		// getLocationClass(location, index) {
		// 	// Generate heat map
		// 	return `svg-map__location svg-map__location--heat${index % 4}`
		// },

	},
}
</script>