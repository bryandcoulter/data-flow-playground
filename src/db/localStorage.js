class LocalStorage {
	static load(name) {
		try {
			const serialized = localStorage.getItem(name)
			if (serialized === null) {
				return {}
			}
			return JSON.parse(serialized)
		}
		catch (error) {
			return undefined
		}
	}

	static check(name) {
		const serialized = localStorage.getItem(name)
		if (serialized === null) {
			return false;
		}
		return true;
	}

	static save(name, object) {
		try {
			const serialized = JSON.stringify(object)
			localStorage.setItem(name, serialized)
		}
		catch (error) {
			console.error(error)
			console.error('Failed to save', state)
		}
	}
}
