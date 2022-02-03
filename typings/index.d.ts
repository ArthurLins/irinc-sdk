export type CommandCallback = (entity: ScriptEntity, text:String) => any

export interface IScriptReachable {
  getX(): Number
	getY(): Number
	getZ(): Number
}

export interface ScriptFurni {
	getId(): Number
	getX(): Number
	getY(): Number
	getZ(): Number
	getR(): Number
	getState(): String
	getSprite(): Number
	getName(): String
	getEntities(): ScriptEntity[]
	getInteractioninterface(): String
	getInteractionModesCount(): String
	getStackHeight(): Number
	hasEntities(): Boolean
	canSit(): Boolean
	canWalk(): Boolean
	show(): void
	hide(): void
	toggleState(): void
	move(x: Number, y: Number, z: Number, rot: Number): void
	move(object: IScriptReachable, rot: Number): void
	setState(value: String): void
}

export interface FakeFloorItem {
	getId(): Number
	getX(): Number
	getY(): Number
	getZ(): Number
  getState(): String
	getStackHeight(): String
	setState(state: String): void
	setStackHeight(height: Number): void
	move(x: Number, y: Number, z: Number, r: Number): void
}

export interface ScriptEntity {
	getId(): Number
	getUsername(): String
	getX(): Number
	getY(): Number
	getZ(): Number
	getR(): Number
	getMotto(): String
	getFigure(): String
	getEffect(): Number
	getHandItem(): Number
	getDance(): Number
	distanceTo(e: IScriptReachable): Number
	distanceTo(x: Number, y: Number, z: Number): Number
	isPlayer(): Boolean
	isBot(): Boolean
	isPet(): Boolean
	equals(entity: ScriptEntity): Boolean
	in(object: IScriptReachable): Boolean
	inAny(furnis: IScriptReachable[]): Boolean
	canWalk(): Boolean
	isWalking(): Boolean
	hasBadge(badge: String): Boolean
	hasRank(rank: Number): Boolean
	touching(x: Number, y: Number, z: Number): Boolean
	touching(e: IScriptReachable): Boolean
	setUsername(username: String): void
	setMotto(motto: String): void
	setFigure(gender: String, figure: String): void
	setHandItem(handitem: Number): void
	setEffect(effect: Number): void
	setCanWalk(can: Boolean, effect: Boolean): void
	setDance(danceId: Number): void
	giveBadge(badge: String): void
	removeHandItem(): void
	removeEffect(): void
	removeBadge(badge: String): void
	say(message: String, shout: Boolean, bubbleId: Number): void
	message(message: String, bubble: Number): void
	whisper(to: ScriptEntity, message: String, bubbleId: Number): void
	lookTo(object: IScriptReachable, moveHead: Boolean): void
	lookTo(entity: ScriptEntity): void
	lookTo(x: Number, y: Number, moveHead: Boolean): void
	teleport(x: Number, y: Number, z: Number, r: Number): void
	teleport(o: IScriptReachable): void
	walk(o: IScriptReachable): void
	walk(x: Number, y: Number): void
	cancelWalk(): void
	action(): void
	std(): void
	lay(): void
	sit(): void
	kick(): void
	gotoRoom(roomId: Number): void
	notification(icon: String, message: String): void
	youtube(url: String, force: Boolean): void
}

export interface FakeEntity {
	getId(): Number
	getUsername(): String
	getX(): Number
	getZ(): Number
	getY(): Number
	getR(): Number
	getFigure(): String
	getMotto(): String
	getEffect(): Number
	getHandItem(): Number
	getDance(): Number
	distanceTo(e: IScriptReachable): Number
	distanceTo(x: Number, y: Number, z: Number): Number
	isBot(): Boolean
	touching(x: Number, y: Number, z: Number): Boolean
	touching(e): Boolean
	in(obj: IScriptReachable): Boolean
	isWalking(): Boolean
	setUsername(username: String): void
	setFigure(gender: String, figure: String): void
	setMotto(motto: String): void
	setEffect(e: Number): void
	setHandItem(h: Number): void
	setDance(danceId: Number): void
	removeEffect(): void
	removeHandItem(): void
	cancelWalk(): void
	std(): void
	sit(): void
	lay(): void
	action(action: Number): void
	walk(x: Number, y: Number): void
	walk(object: IScriptReachable): void
	teleport(x: Number, y: Number, z: Number, r: Number): void
	teleport(object: IScriptReachable): void
	lookTo(x: Number, y: Number, moveHead: Boolean): void
	lookTo(e: IScriptReachable): void
	say(message: String, shout: Boolean, bubbleId: Number): void
	whisper(to: ScriptEntity, message: String, bubbleId: Number): void
}

export interface ScriptTile {
	getX(): Number
	getY(): Number
	getZ(): Number
	getFurnis(): ScriptFurni[]
	getEntities(): ScriptEntity[]
	getTopFurni(): ScriptFurni
	getWalkHeight(): Number
	hasGate(): Boolean
	hasFurni(): Boolean
	hasEntities(): Boolean
	canStack(): Boolean
	canPlaceItem(): Boolean
}

export interface DelayTask {
  getTicksRemain(): Number
}

export interface Engine {
  include(scriptName:String): void
  debug(object: any): void
  log(object: any): void 
  d(object: any): void 
  e(object: any): void 
}

export interface Events {
	on(eventName: String, callback: CommandCallback): void,
}

export interface Room {
  getId(): Number
  ownerId(): Number
  getName(): String
  getOwnerUsername(): String
  userCount(): Number
  getFurniById(id: Number): ScriptFurni
  getPlayerById(id: Number): ScriptEntity
  getPlayerByName(name:String): ScriptEntity
  getBotByName(name: String): void 
  getAllPlayers(): ScriptEntity[]
  getFurniByTile(x: Number, y: Number): ScriptFurni[]
  getEntitiesByCoord(x: Number, y: Number): ScriptEntity[] 
  getEntitiesByFurni(furni: ScriptFurni): ScriptEntity[]
  getEntitiesByFurnis(furnis: ScriptFurni[]): ScriptEntity[]
  getAllFurnisBySpriteId(sprite: Number): ScriptFurni[]
  getWalkThrough(): Boolean
  getDiagonal(): Boolean
  getRoomMute(): Boolean
  getTile(x: Number, y: Number): ScriptTile
  setName(name: String): void
  setDiagonal(allow: Boolean):void
  setWalkThrough(allow: Boolean): void
  setRoomMute(mute: Boolean): void
  open(): void
  setDoorbell(): void
  setPassword(password: String): void
  alert(message:String): void
  notification(icon: String, message: String): void
  tts(text: String): void
  youtube(link:String): void
  setMoodLight(activated: Boolean): void 
  setMoodLight(activated: Boolean, r: Number, g: Number, b: Number, intensity: Number, wallOnly: Boolean): void
  setBackgroundTonerColor(h: Number, s: Number, l: Number): void
}

export interface Faker {
	getLoadedFurnis(): FakeFloorItem[]
	createFakeBot(name: String, x: Number, y: Number, z: Number, r: Number): FakeEntity
	createFakePlayer(name: String, x: Number, y: Number, z: Number, r: Number): FakeEntity
	createFakeItem(spriteId: Number, x: Number, y: Number, z: Number, r: Number) : FakeFloorItem
	removeEntity(fakeEntity: FakeEntity): void
	removeFakeFloorItem(fakeItem: FakeFloorItem): void
	removeAllEntities(): void
	removeAllFloorItems(): void
}

export interface Delay {
  wait(callback: Function, ticks: Number): DelayTask
  interval(callback: Function, ticks: Number): DelayTask
  cancel(task: DelayTask): void
  seconds(sec: Number): Number
}

export interface Commands {
 	register(text: String, needStartText: Boolean, callback: CommandCallback): void
	register(text: String, callback: CommandCallback): void
}

export interface Currency {
	giveCreditsById(id: Number, amount: Number): void
  giveCreditsByUsername(username: String, amount: Number): void
	giveDucketsById(id: Number, amount: Number): void
  giveDucketsByUsername(username: String, amount: Number): void
  giveDiamondsById(id: Number, amount: Number): void
	giveDiamondsByUsername(username: String, amount: Number): void
}

export interface Highscores {
	add(player: String|ScriptEntity, points: Number): void
	remove(player: String|ScriptEntity, points: Number): void
	addGroup(player: String[]|ScriptEntity[], points: Number): void
	removeGroup(player: String|ScriptEntity, points: Number): void
	clear(scoreboard: Number|ScriptFurni): void
	reset(scoreboard: Number|ScriptFurni): void
}

export interface GlobalStorage {
	get(key: String): String
	set(key: String, value: String): void
	delete(key: String): void
}

export interface RoomStorage {
  get(key: String): String
  set(key:String, value:String): void
  delete(key:String): void
}

export interface Pathfinder {
  makeFurniPath(furni: ScriptFurni, x: Number, y: Number): IScriptReachable[]
  makeFurniPath(furni: ScriptFurni, position: IScriptReachable): IScriptReachable[]
	makeEntityPath(entity: ScriptEntity, x: Number, y: Number): IScriptReachable[]
	makeEntityPath(entity: ScriptEntity, position: IScriptReachable): IScriptReachable[]
}
