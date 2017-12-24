export const ChangeUserInfo = (state,user) =>{
	state.UserInfo.name=user.name
	state.UserInfo.password=user.password
}
