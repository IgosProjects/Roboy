local module = {}

 function module.INIT(name,icon,linkoptinal)
		
		script.Icon.Image = icon
		if icon:IsA("ImageLabel") then
				error("Error while making game"..tostring(name).."Reason:Icon is a imagelabel Not a image id")
			
			else
			 
		
		end
			
		module.name = name
		module.page = linkoptinal
 end



return module
