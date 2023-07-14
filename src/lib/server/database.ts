const database = new Map();

export function getTodos(userid: any) {
	if (!database.has(userid)) {
		createTodo({ userid, description: 'Learn about API routes' });
	}

	return Array.from(database.get(userid).values());
}

export function createTodo({ userid, description }: any) {
	if (!database.has(userid)) {
		database.set(userid, new Map());
	}

	const todos = database.get(userid);

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		description,
		done: false
	});

	return {
		id
	};
}

export function toggleTodo({ userid, id, done }: any) {
	const todos = database.get(userid);
	todos.get(id).done = done;
}

export function deleteTodo({ userid, id }: any) {
	const todos = database.get(userid);
	todos.delete(id);
}