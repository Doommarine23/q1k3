
class entity_pickup_rocketss_t extends entity_pickup_t {
	_init() {
		super._init();
		this._texture = 25;
	}

	_pickup() {
		for (let w of game_entity_player._weapons) {
			if (w instanceof(weapon_rocketlauncher_t)) {
				w._ammo += 5;
				audio_play(sfx_pickup);
				this._kill();
			}
		}
	}
}
