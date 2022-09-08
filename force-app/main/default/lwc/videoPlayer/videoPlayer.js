import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
    @api videoUrl;

    @api
    get isPlaying() {
        const player = this.template.querySelector('video');
        return player != null && player.paused === false;
    }

    @api
    play() {
        const player = this.template.querySelector('video');
        if (player) {
            player.play();
        }
    }

    @api
    pause() {
        const player = this.template.querySelector('video');
        if (player) {
            player.pause();
        }
    }

    get videoType() {
        const player = this.template.querySelector('video');
        return 'video/' + this.videoUrl.split('.').pop();
    }
}