
class entity_projectile_rocket_t extends entity_t {
	_init() {
		this._texture = 8;
		this._model = model_nail;
		this._gravity = 0;
		this._die_at = game_time + 3;
		this._damage = 200;	//120;	
	}

	_update() {
		this._update_physics();
		this._draw_model();
	}

	_did_collide(axis) {
		this._kill();
	}

	_did_collide_with_entity(other) {
		this._kill();
	}

	_kill() {
		// Deal some damage to nearby entities
		for (let entity of this._check_entities) {
			let dist = vec3_dist(this.p, entity.p);
			if (dist < 220) { //dist 196
				entity._receive_damage(this, scale(dist, 0, 196, this._damage, 0));
			}
		}

		super._kill();
		this._play_sound(sfx_grenade_explode);
		this._spawn_particles(20, 800, model_explosion, 8, 1);
		game_spawn(entity_light_t, vec3_add(this.p, vec3(0,16,0)), 250, 0x08f)._die_at = game_time + 0.2;
	}
	
}
