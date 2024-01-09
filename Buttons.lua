local module = {}
local bload = {}
 function module.INIT(Button)
		 table.insert(bload,Button)
	 IsButtonPress()
 end


 function IsButtonPress()
			for i,v in pairs(bload) do
				v.Activated:Connect(function()
					print("Button DEEP Press")
				end)
			end
 end

return module
