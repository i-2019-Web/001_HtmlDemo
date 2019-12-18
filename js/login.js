function CheckForm(TheForm)
	{
		if(TheForm.UserName.value=='')
		{
			alert('请输入您的用户名');
			TheForm.UserName.focus();
			return false;
		}
		else
		{
			
		}
		if(TheForm.UserPass.value=='')
		{
			alert('请输入您的密码');
			TheForm.UserPass.focus();
			return false;
		}
	}
