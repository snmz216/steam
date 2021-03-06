/*
  Copyright (C) 2016 H2O.ai, Inc. <http://h2o.ai/>

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as
  published by the Free Software Foundation, either version 3 of the
  License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

package cli

import (
	"fmt"
	"log"
	"strconv"

	"github.com/spf13/cobra"
)

var unregisterClusterHelp = `
cluster [clusterId]
Remove an external cluster from steam.
Examples:

	$ steam unregister cluster 9
`

func unregisterCluster(c *context) *cobra.Command {
	cmd := newCmd(c, unregisterClusterHelp, func(c *context, args []string) {
		if len(args) != 1 {
			log.Fatalln("Invalid usage. See 'steam help unregister cluster'.")
		}

		// -- Args --

		clusterId, err := strconv.ParseInt(args[0], 10, 64)
		if err != nil {
			log.Fatalf("Invalid usage for clusterId %s: expecting int: %v", args[0], err)
		}

		// -- Execution --

		if err := c.remote.UnregisterCluster(clusterId); err != nil {
			log.Fatalln(err) //FIXME format error
		}

		// -- Formatting --

		fmt.Println("Successfully unregisted cluster %d", clusterId)
	})

	return cmd
}
