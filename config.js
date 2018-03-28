#--------------------------------------
#        Mineplex Punish Gui
#  by RecordMe
#--------------------------------------
# You will need a seperate ban plugin (Works best with MaxBans plugin!)
#--------------------------------------
#  Command to open gui
#--------------------------------------

#--------------------------------------
#  COMMANDS ARE EXECUTED BY CONSOLE!
#--------------------------------------


command /turnin:
    #------------------
    #   Alias for /p
    #------------------
    aliases: /TI
    #-----------------------------
    #Permission (can be whatever)
    #-----------------------------
    permission: Spies.open
    #--------------------------------------
    #Message if player doesn't have perms.
    #--------------------------------------
    permission message: &7Unknown command do /help for a list of commands.
    trigger:
        #---------------
        # Requires Args
        #---------------
        if arg-1 is not set:
            send "&2&lServer&8&l» &4Incorrect arguments!"
            send "&2&lserver&8&l» &7/&6TurnIn &7<&6player&7> &7<&6Report&7>"
        if arg-2 is set:
            open chest with 6 rows named "Punish %arg-1%" to player
            wait 1 tick